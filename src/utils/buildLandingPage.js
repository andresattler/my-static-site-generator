import React from 'react';
import ReactDom from 'react-dom/server'
import fs from 'fs';
import fm from 'front-matter';
require("babel-register");

export default function (articles, dir){
  const data = articles.map( val => fs.readFileSync(`./pages/articles/${val}/index.md`, 'utf8'));
  const content = data.map( val => fm(val));
  const attributes = content.map( val => val.attributes);
  const Html= require(`${dir}/html`).default;
  fs.writeFileSync('./publish/index.html', ReactDom.renderToStaticMarkup(<Html articles={attributes}/>));
};
