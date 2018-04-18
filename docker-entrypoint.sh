#!/bin/bash

cd /code
rm -rf /code/docs/_site/
bundle install --local

if [ "$JEKYLL_ENV" == "development" ]; then
  rake preview
elif [ "$JEKYLL_ENV" == "preview" ]; then
  cd /code/docs
  bundle exec jekyll serve --watch --force_polling --host 0.0.0.0
elif [ "$JEKYLL_ENV" == "build" ]; then
  cd /code/docs
  bundle exec jekyll build
fi
