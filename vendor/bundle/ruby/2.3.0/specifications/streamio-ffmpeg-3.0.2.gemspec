# -*- encoding: utf-8 -*-
# stub: streamio-ffmpeg 3.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "streamio-ffmpeg"
  s.version = "3.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Rackfish AB"]
  s.date = "2016-11-18"
  s.email = ["support@rackfish.com", "bikeath1337.com"]
  s.homepage = "http://github.com/streamio/streamio-ffmpeg"
  s.rubygems_version = "2.5.1"
  s.summary = "Wraps ffmpeg to read metadata and transcodes videos."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<multi_json>, ["~> 1.8"])
      s.add_development_dependency(%q<rspec>, ["~> 3"])
      s.add_development_dependency(%q<rake>, ["~> 10.1"])
    else
      s.add_dependency(%q<multi_json>, ["~> 1.8"])
      s.add_dependency(%q<rspec>, ["~> 3"])
      s.add_dependency(%q<rake>, ["~> 10.1"])
    end
  else
    s.add_dependency(%q<multi_json>, ["~> 1.8"])
    s.add_dependency(%q<rspec>, ["~> 3"])
    s.add_dependency(%q<rake>, ["~> 10.1"])
  end
end
