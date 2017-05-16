import React from 'react';
import ReactDom from 'react-dom/server'
import fs from 'fs';
import fm from 'front-matter';
require("babel-register");

export default function (name, dir, path){
  const data = fm(fs.readFileSync(`./pages/${path}/index.md`, 'utf8'));
  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-highlightjs'));
  const text = md.render(data.body);
  const Html= require(`${dir}/html`).default;
  fs.mkdirSync(`./publish/${path}`);
  fs.writeFileSync(`./publish/${path}/index.html`, ReactDom.renderToStaticMarkup(<Html content={text}/>));
};
