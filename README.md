# generator-iscinc :bulb:

> iSC Inc. :office: generator for Yeoman generators  
> This is the first programmed generator for Yeoman by the iSC Inc. team :couple_with_heart:

* Maintainer: [Suriyaa Kudo](https://github.com/SuriyaaKudoIsc)
* Owner: [iSC Inc.](http://inc.isc)
* Download/Read it on NPM website: [www.npmjs.com/package/generator-iscinc](https://www.npmjs.com/package/generator-iscinc)

![Yo dawg, I heard you like generators?](http://i.imgur.com/2gqiift.jpg)


## Status :earth_americas:

* :sparkles: [serverGem](https://github.com/serverGems) Repository: ![serverGems Repository](https://img.shields.io/badge/iSC Inc. Repo-Yeoman Generator-yellow.svg?style=flat)
* :beers: [serverGem](https://github.com/serverGems) Version: ![serverGems Version](https://img.shields.io/badge/serverGems Version-1.0-blue.svg?style=flat)
* :chart_with_upwards_trend: [GIT CI](https://github.com/git-ci) Build Status: ![Git CI](http://img.shields.io/badge/build-passed-green.svg?style=flat)
* :chart_with_downwards_trend: [Travis CI](https://travis-ci.org/) Build Status: ![Travis CI](http://img.shields.io/travis/iSCInc/generator-iscinc.svg?style=flat)
* :question: GitHub release: ![GitHub release](https://img.shields.io/github/release/iSCInc/generator-iscinc.svg?style=flat)

[gem]: https://servergems.org/gems/RubyGems
[travis]: http://travis-ci.org/serverGems/RubyGems

## Getting started :checkered_flag:

- Install: `npm install -g generator-iscinc`
- Run: `yo iscinc` :computer:


## Commands

* `yo iscinc` shows a wizard for generating a new generator
* `yo iscinc:subgenerator MEDIAWIKI` generates a subgenerator with the name MEDIAWIKI :warning: (yo iscinc:subgenerator <name> generates a subgenerator with the name <name>)

## What do you get?

The generator-iscinc project directory structure for you :wink::

    .
    ├── app
    │   ├── index.php
    │   └── templates
    │       ├── editorconfig
    │       └── jshintrc
    │   └── iscinc
    │       ├── EXTENSIONS.php
    │       └── GIT.php
    │       ├── NAMESPACES.php
    │       └── SYSTEM.php
    ├── .editorconfig
    ├── .gitattributes
    ├── .gitignore
    ├── .eslintrc
    ├── .travis.yml
    ├── .yo-rc.json
    ├── package.json
    ├── gulpfile.js
    ├── README.md
    ├── LICENSE
    └── test/
        └── app.js


## Running tests

Run `npm test` to run our test suite.

These tests will be run automatically in our git repository if you connect Travis CI. We can also track test coverage using Coveralls.


## Contributing :briefcase:

See the [contribution docs](https://github.com/iSCInc/generator-iscinc/blob/yo development/contributing.md). :pencil2:

When submitting an issue, please follow [the
guidelines](https://github.com/iSCInc/generator-iscinc/blob/yo development/contributing.md#issue-submission). :fire:

Especially important is to make sure Yeoman is up-to-date, and providing the
command or commands that cause the issue. :speech_balloon:


## License

This project is licensed under [MIT License](LICENSE.md). [**Suriyaa Kudo** :laughing:](http://bit.ly/Suriyaa) and other [**contributors** :thumbsup:](https://github.com/iSCInc/generator-iscinc/graphs/contributors).


----
Copyright (c) *2015-present* **iSC Inc. & Yeoman** :v:
