import liveServer from 'live-server';
import http from 'http';
import watch from 'node-watch';
import build from './build'

function develop() {
  build();
  watch(['html.js', './pages', './themes'], function(){
    console.log('rebuilding');
    build();
  });

  const params = {
    port: 8000,
    root: "./publish",
    watch: "./publish/index.html"
  };
  liveServer.start(params);
}

export default develop;
