import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';

const _ = GulpLoadPlugins();

Gulp.task('build:styles',
  () => Gulp.src('source/*.scss')
            .pipe(_.sass())
            .pipe(Gulp.dest('build'))
);
