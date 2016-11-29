import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import {exec} from 'child_process';

const paths = {
  src: 'src/**/*.js',
  libDir: 'lib'
};

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['clean'], () =>
  gulp.src(paths.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

gulp.task('main', ['build'], (callback) => {
  exec('mygenerator -b', (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

gulp.task('watch', () =>
  gulp.watch(paths.src, ['build'])
);

gulp.task('default', ['watch', 'build']);
