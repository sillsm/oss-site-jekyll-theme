Gem::Specification.new do |spec|
  spec.name          = "jetbrains-oss-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["JetBrains"]
  spec.email         = [""]

  spec.summary       = "JetBrains Jekyll theme for open-source projects"
  spec.homepage      = "https://github.com/JetBrains/oss-site-jekyll-theme"
  spec.license       = "Apache-2.0"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_layouts|_includes|LICENSE|README)!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
  # spec.add_development_dependency "github-pages", "180"
end
