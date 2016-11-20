import React from 'react';
import ReactDom from 'react-dom/server'
import path from 'path';
import fs from 'fs';
import createRoutes from './createRoutes';
import markdownIt from 'markdown-it';
require("babel-register");

function build(name){
  const dir = path.resolve('.');
  createRoutes(dir);
  const Html= require(`${dir}/html`).default;
  const str = fs.readFileSync(`${dir}/pages/${name}/index.md`, 'utf8');
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });
  const content = md.render(str);
  console.log(content);
  fs.writeFileSync(`./publish/${name}`, ReactDom.renderToStaticMarkup(<Html content={content}/>));
};

export default build;
