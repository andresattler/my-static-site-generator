import path from 'path';
import createRoutes from './createRoutes';
import buildHTML from './buildHTML';
import del from 'del';
function build(){
  del.sync('publish/*');
  const dir = path.resolve('.');
  const paths = createRoutes(dir);
  paths.forEach(function(path){
    buildHTML(path, dir);
  })
};

export default build;
