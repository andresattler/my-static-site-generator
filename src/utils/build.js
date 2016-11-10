import React from 'react';
import ReactDom from 'react-dom/server'
import path from 'path';
import fs from 'fs';

function build(){
  const dir = path.resolve('.');
  const Html= require(`${dir}/components/html`);
  fs.writeFileSync('index.html', ReactDom.renderToString(<Html/>));
};

export default build;
