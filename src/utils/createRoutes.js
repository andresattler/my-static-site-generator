import glob from 'glob';

function createRoutes(dir) {
  return glob.sync('*', {cwd: `${dir}/pages/`})

};

export default createRoutes;
