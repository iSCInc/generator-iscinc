generator-iscinc
====

> iSC Inc. generator for Yeoman generators  
> This is the first programmed generator for Yeoman by the iSC Inc. team

## Status

* Travis CI: [![Build Status](https://secure.travis-ci.org/iSCInc/generator-iscinc.svg?branch=master)](https://travis-ci.org/iSCInc/generator-iscinc)


## Getting started

- Install: `npm install -g generator-iscinc`
- Run: `yo iscinc`


## Commands

* `yo iscinc` shows a wizard for generating a new generator
* `yo iscinc:subgenerator MEDIAWIKI` generates a subgenerator with the name MEDIAWIKI


## What do you get?

The generator-iscinc project directory structure for you:

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
    ├── .jshintrc
    ├── CONTRIBUTING.md
    ├── LICENSE.md
    ├── package.json
    ├── README.md
    └── test
        ├── test-creation.js
        └── test-load.js


## Changelog

* **0.1.0** *(date: 2015-02-14)*
    * Started project


## Contributing

See the [contribution docs](https://github.com/iSCInc/generator-iscinc/blob/yo development/contributing.md).

When submitting an issue, please follow [the
guidelines](https://github.com/iSCInc/generator-iscinc/blob/yo development/contributing.md#issue-submission).

Especially important is to make sure Yeoman is up-to-date, and providing the
command or commands that cause the issue.


## License

This project is licensed under GNU GPL v2.
The copyright holders are [**Suriyaa Kudo**](http://bit.ly/Suriyaa) *<suriyaa@inc.isc>* and other [**contributors**](https://github.com/iSCInc/generator-iscinc/graphs/contributors).


----
Copyright (c) *2015-present* **iSC Inc. & Yeoman**
