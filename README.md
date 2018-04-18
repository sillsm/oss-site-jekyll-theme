# JetBrains OpenSource Project Jekyll Theme

## Setup

1. Docker (pick only from stable channel):
   - [macOS](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac)
   - [Windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows)
2. If you want to develop theme frontend - [NodeJS](http://nodejs.org) and [Yarn](https://yarnpkg.com/lang/en/docs/install/) package manager is also needed.

## How to run

**All in one option (suitable for content authors/writers)**:
- `docker-compose up`. It will create site on [localhost:4000](http://localhost:4000) 
  and build all stuff to `docs/_site`.

**If you want to develop frontend**
- `yarn start` will run webpack in watch mode. Assets will build to `assets/build`. 
  Don't forget to install frontend dependencies first - `yarn install`.
