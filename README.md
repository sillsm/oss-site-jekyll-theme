# JetBrains OpenSource Project Jekyll Theme

## Setup

1. Docker (pick only from stable channel):
   - [macOS](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac)
   - [Windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows)
2. If you want to develop frontend - Yarn package manager is also needed ([installation instructions](https://yarnpkg.com/lang/en/docs/install/)).

## How to run

**All in one option (suitable for content authors/writers)**:
- `docker-compose -f docker-compose.preview.yml up`. It will create site on [localhost:4000](http://localhost:4000) 
  and build all stuff to `demo-site/_site`.

**Developer has 2-step option**:
- `docker-compose up` will run only site at [localhost:4000](http://localhost:4000).
- `yarn start` will run webpack in watch mode. Assets will build in `demo-site/_site/assets/build`. 
   Don't forget to install frontend dependencies first - `yarn install`.
