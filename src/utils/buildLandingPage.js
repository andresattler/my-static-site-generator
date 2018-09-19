import React from 'react'
import ReactDom from 'react-dom/server'
import fs from 'fs'
import fm from 'front-matter'
require("babel-register")

const buildLandingPage = (articles, dir) => {
  const data = articles.map( val => fs.readFileSync(`./pages/articles/${val}/index.md`, 'utf8'))
  const content = data.map( val => fm(val))
  const attributes = content.map( val => val.attributes)
  const Html= require(`${dir}/html`).default
  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  })
  articles.forEach((val, i) => {
    const text = md.render(content[i].body)
    const start = text.indexOf('<p>')+3
    const end = text.indexOf('</p>')
    attributes[i].description = text.slice(start, end)
    attributes[i].link = 'articles/'+val
  })
  fs.writeFileSync('./publish/index.html', ReactDom.renderToStaticMarkup(<Html articles={attributes}/>))
}

export default buildLandingPage
