FROM jekyll/jekyll:latest

RUN /usr/jekyll/bin/bundle install --gemfile=/srv/jekyll/Gemfile