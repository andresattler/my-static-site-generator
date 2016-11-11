import React from 'react';
import ReactDom from 'react-dom/server'
import path from 'path';
import fs from 'fs';
require("babel-register");

function build(){
  const dir = path.resolve('.');
  const Html= require(`${dir}/components/html`).default;
  fs.writeFileSync('./publish/index.html', ReactDom.renderToStaticMarkup(<Html/>));
};

export default build;
