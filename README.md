# JetBrains OpenSource Project Jekyll Theme

## Setup

1. Docker (pick only from stable channel):
   - [macOS](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac)
   - [Windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows)
2. If you want to develop theme frontend - [NodeJS](http://nodejs.org) and [Yarn](https://yarnpkg.com/lang/en/docs/install/) is also needed.
   Don't forget to install frontend dependencies - `yarn install`.

## How to run

**All in one option (suitable for content authors/writers)**:
- `docker-compose up`. It will create site on [localhost:4000](http://localhost:4000) and build all stuff to `docs/_site`.

**If you want to develop frontend**
- Run Jekyll site as it described above.
- Run webpack-dev-server - `yarn start`. It will create server at http://localhost:9000 and this address should be used for development.
  All site content will by proxied from http://localhost:4000.
 
