import Post from './Post';
import json from './assets/json.json';
import WebpackLogo from './assets/WebpackLogo.jpg';
import './styles/styles.css';
import './styles/less.less';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to String:', post.toString());
console.log('JSON:', json);