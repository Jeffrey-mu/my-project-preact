import { h } from 'preact';
import data from './index.json'
import style from './style.css';
const Post = () => {
  console.log(data);
  return (
    <div className={style.post}>
      {data.map(el => <Card {...el} />)}
    </div>
  );
};

const Card = props => {
  return (
    <a href={props.link} className={style.card}>
      <img src={'http://47.104.212.164:3000/' + props.picture}></img>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </a>
  );
};

export default Post;
