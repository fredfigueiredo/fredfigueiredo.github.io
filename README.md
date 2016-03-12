# My Personal Page

> Development environment to quick build and publish my personal web page.

## Get started

Clone the repository and switch to the 'source' branch:
```sh
git clone git@github.com:fredfigueiredo/fredfigueiredo.github.io.git
git checkout source
```

Install the required dependencies:
```sh
npm install
```

Start the development 'server':
```sh
grunt dev
```

When done, publish the changes into the master branch:
```sh
grunt publish
```

Needless to say, commit & push the changes from this branch into github:
```sh
git add .
git push
```

## What is missing

* Add README.md to "master" branch
  * Explain master / source approach
  * Add as MASTER.md and rename / copy with grunt task
* Add "Recomendations" section
* Add links to "Conferences" section
* Add grunt task to minify JS and CSS (when publishing)
* Fix header divider in mobile (too long)
* Add hover effect to buttons (like in http://boxever.com)
