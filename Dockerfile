FROM ruby:2.3.1

RUN apt-get update && \
	gem install -q bundler:1.16.1 rake:12.3.1 jekyll:3.7.3

EXPOSE 4000
ENTRYPOINT []
