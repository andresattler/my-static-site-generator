import path from 'path';
import createRoutes from './createRoutes';
import buildHTML from './buildHTML';
function build(){
  const dir = path.resolve('.');
  const paths = createRoutes(dir);
  paths.forEach(function(path){
    buildHTML(path);
  })
};

export default build;
