Foundation.css
==============

This package is perfect for you if:

* You'd like to use [Foundation](https://github.com/zurb/foundation) CSS framework
* You'd like to avoid bloated stylesheet by only including necessary components
* You're not using Sass and don't wanna see it creeping into your asset pipeline

Overview
--------
#### Current Foundation Version: 5.5.1

The nature of this package is very simple: the official Foundation repo is included as a submodule - so the source is exactly the same and unaltered - and checkout'd to reflect the latest version, but instead of being built into a single, monolithic file, a custom asset pipeline will kick in and compile each individual component in Foundation into its own stylesheet.

Since this process is not quite automatic yet, whenever you notice this package is out of sync with the latest version of Foundation, please [open an issue](https://github.com/gsklee/foundation.css/issues) to request for an update.

Install
-------
```bash
$ npm install foundation.css
```

Usage
-----
The compiled stylesheet collection can be found under `/build`. Since every file is sharing a large and identical chunk of global rules, however, it's strongly recommended that the files can be passed through an asset pipeline which strips duplicate CSS rules away. For example, this can be achieved in [gulp](https://github.com/gulpjs/gulp) using [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css):

```javascript
import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';

const _ = GulpLoadPlugins();

Gulp.task('build:styles',
  () => Gulp.src([
              'node_modules/foundation.css/build/grid.css',
              'node_modules/foundation.css/build/buttons.css',
              'node_modules/foundation.css/build/button-groups.css'
            ])
            .pipe(_.concat('main.css'))
            .pipe(_.minifyCss())
            .pipe(Gulp.dest('build'))
);
```

License
-------
MIT © G. Kay Lee
