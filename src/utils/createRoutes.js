import glob from 'glob';

const createRoutes = (dir) =>
  glob.sync('*', {cwd: `${dir}/pages/`})

export default createRoutes
