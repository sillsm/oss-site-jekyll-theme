Gem::Specification.new do |spec|
  spec.name          = "jetbrains-oss-jekyll-theme"
  spec.version       = "0.0.2"
  spec.authors       = ["JetBrains"]
  spec.email         = [""]

  spec.summary       = "JetBrains Jekyll theme for open-source projects"
  spec.homepage      = "https://github.com/JetBrains/oss-site-jekyll-theme"
  spec.license       = "Apache-2.0"

  spec.files        = Dir.glob("{_includes,_layouts,assets}/**/*") + %w(README.md)

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
