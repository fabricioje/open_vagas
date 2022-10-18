source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

gem 'rails', '~> 7.0', '>= 7.0.3'
gem 'pg', '>= 0.18', '< 2.0'
gem "puma", "~> 4.3.9"
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.2', require: false

gem 'figaro'
gem 'simple_form'
gem 'devise'
gem 'haml'
gem "haml-rails", "~> 2.0"
#gem 'image_processing'

gem 'kaminari'
gem 'bootstrap4-kaminari-views'
gem 'ransack'
#gem 'select2-rails'
gem 'rubyzip'

gem 'redis'
gem 'sidekiq'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'dotenv-rails'
  gem 'pry'
  gem 'pry-rails'
  gem 'awesome_print'
  gem 'rspec-rails'
  gem 'solargraph'
  gem 'factory_bot_rails'
  gem 'faker'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring', '~> 4.1.0'
  gem 'spring-watcher-listen'
  # gem 'mailcatcher', '~> 0.8.0'
end

group :test do
  gem 'database_cleaner-active_record'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]