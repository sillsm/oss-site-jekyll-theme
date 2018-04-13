#!/bin/bash

cd /code
rm -rf /code/demo-site/_site/
bundle install --local

if [ "$JEKYLL_ENV" == "development" ]; then
  rake preview
elif [ "$JEKYLL_ENV" == "preview" ]; then
  cd /code/demo-site
  bundle exec jekyll serve --watch --force_polling --host 0.0.0.0
elif [ "$JEKYLL_ENV" == "build" ]; then
  cd /code/demo-site
  bundle exec jekyll build
fi
