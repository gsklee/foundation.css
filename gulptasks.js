import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
import PACKAGE from './package.json';

const _ = GulpLoadPlugins();

Gulp.task('build:styles',
  () => Gulp.src('source/*.scss')
            .pipe(_.sass())
            .pipe(_.replace(/{{\s*VERSION\s*}}/g, PACKAGE.version))
            .pipe(Gulp.dest('build'))
);
