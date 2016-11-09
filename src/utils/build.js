import React from 'react';
import ReactDom from 'react-dom'

class Html extends React.Component {
  render (){
    return <p>Hello world</p>;
  }
};

function build(){
  console.log('building...');
};

module.exports = build;
