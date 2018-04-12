FROM ruby:2.3.1
MAINTAINER JetBrains <info@jetbrains.com>

RUN apt-get update && \
	gem install -q bundler rake && \
	gem install -q jekyll

EXPOSE 4000
ENTRYPOINT []
