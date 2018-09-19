import path from 'path'
import del from 'del'
import fs from 'fs-extra'
import glob from 'glob'
import stylus from 'jr-stylus'

import buildPage from './buildPages'
import buildLP from './buildLandingPage'

const build = () => {
  del.sync('publish/*')
  stylus({
    inDir: './themes/basic-theme/style',
    outFile: './publish/css/style.css'
  })
  fs.copySync('./assets', './publish/assets')
  const articles = glob.sync('*', {cwd: './pages/articles/'})
  let pages = glob.sync('*', {cwd: './pages/'})
  pages = pages.filter(val => val!='articles')
  const dir = path.resolve('.')
  buildLP(articles, dir)
  pages.forEach(function(page){
    const path = page
    buildPage(page ,dir, path)
  })
  fs.mkdirSync('./publish/articles')
  articles.forEach(function(page){
    const path = 'articles/'+page
    buildPage(page, dir, path)
  })
}

export default build
