$:.push File.expand_path("../lib", __FILE__)

require 'will_paginate_infinite/version'

Gem::Specification.new do |s|
  s.name        = 'will_paginate_infinite'
  s.version     = '0.0.1'
  s.date        = '2018-08-16'
  s.summary     = "Will Paginate with infinite scroll"
  s.description = "Will Paginate with infinite scroll"
  s.authors     = ["Renaldo Pierre-Louis"]
  s.email       = 'pirelouisd87@gmail.com'

  s.files       = `git ls-files -z`.split("\x0")
  s.require_paths = ["lib"]


  s.homepage    = 'https://github.com/PlanBCom/will_paginate_infinite'
  s.license     = 'MIT'
  s.rdoc_options = ['--main', 'README.md', '--charset=UTF-8']
  s.extra_rdoc_files = ['README.md']

  s.add_runtime_dependency "will_paginate", '~> 3.1.0'
end
