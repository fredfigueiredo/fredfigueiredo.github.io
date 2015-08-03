# My Personal Page

> Development environment to quick build and publish my personal web page using grunt, bower and bootstrap.

## Get started

Clone the repository and switch to the 'source' branch:
```sh
git clone git@github.com:fredfigueiredo/fredfigueiredo.github.io.git
sudo npm install -g grunt-cli
sudo npm install -g bower

```

Move to the 'source' branch and install the required dependencies:
```sh
git checkout source
npm install & bower install
```

Start the development 'server':
```sh
grunt dev
```

When done, publish the changes into the master branch:
```sh
grunt publish
```

Needless to say, push the changes to github:
```sh
git push
```

## Features

* HTML5 Boilerplate
* normalize.css
* Modernizr (custom build based on what you use) & jQuery libraries
* GruntJS (integrated watch, development & build tasks)
* Bower for package management in the Front-End
* Built-in preview server with LiveReload
* Automagically lint your scripts
* Automagically wire up your Bower components with grunt-wiredep.
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)

## What is missing

* Add README.md to "master" branch
  * Explain master / source approach
  * Add as MASTER.md and rename / copy with grunt task
* Add "Recomendations" section
* Add links to "Conferences" section
* Add grunt task to minify JS and CSS (when publishing)
* Fix header divider in mobile (too long)
* Add hover effect to buttons (like in http://boxever.com)
