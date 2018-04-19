# Adapted from https://github.com/mmistakes/minimal-mistakes theme
require "bundler/gem_tasks"
require "jekyll"
require "listen"
require 'yaml'

def ignore_exception
  begin
    yield
  rescue Exception
  end
end

def listen_ignore_paths(base, options)
  [
    /_config\.ya?ml/,
    /_site/,
    /\.jekyll-metadata/
  ]
end

def listen_handler(base, options)
  site = Jekyll::Site.new(options)
  Jekyll::Command.process_site(site)
  proc do |modified, added, removed|
    t = Time.now
    c = modified + added + removed
    n = c.length
    relative_paths = c.map{ |p| Pathname.new(p).relative_path_from(base).to_s }
    print Jekyll.logger.message("Regenerating:", "#{relative_paths.join(", ")} changed... ")
    begin
      Jekyll::Command.process_site(site)
      puts "regenerated in #{Time.now - t} seconds."
    rescue => e
      puts "error:"
      Jekyll.logger.warn "Error:", e.message
      Jekyll.logger.warn "Error:", "Run jekyll build --trace for more information."
    end
  end
end

task :preview do
  base = Pathname.new('.').expand_path
  cfg = ignore_exception { YAML.load_file('docs/_config.yml') }
  local_preview_cfg = ignore_exception { YAML.load_file('docs/_local_preview.config.yml') }

  options = (cfg ? cfg : {}).merge({
    'source' => base.join('docs').to_s,
    'destination' => base.join('docs/_site').to_s,
    'exclude' => ["Gemfile", "Gemfile.lock", "node_modules", ".idea", ".git", "_site"],
    'force_polling' => true,
    'serving' => true,
    'host' => '0.0.0.0',
    'theme' => 'jetbrains-oss-jekyll-theme'
  }).merge(local_preview_cfg ? local_preview_cfg : {})

  # puts options
  # abort("QWE")

  options = Jekyll.configuration(options)

  ENV["LISTEN_GEM_DEBUGGING"] = "1"
  listener = Listen.to(
    base.join("_includes"),
    base.join("_layouts"),
    base.join("assets"),
    options["source"],
    :ignore => listen_ignore_paths(base, options),
    :force_polling => options['force_polling'],
    &(listen_handler(base, options))
  )

  begin
    listener.start
    Jekyll.logger.info "Auto-regeneration:", "enabled for '#{options["source"]}'"

    unless options['serving']
      trap("INT") do
        listener.stop
        puts "     Halting auto-regeneration."
        exit 0
      end

      loop { sleep 1000 }
    end
  rescue ThreadError
    # You pressed Ctrl-C, oh my!
  end

  Jekyll::Commands::Serve.process(options)
end
