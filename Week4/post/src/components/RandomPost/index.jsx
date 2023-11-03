import {useState} from 'react'
import PostBody from './PostBody';

const RandomPost = () => {
    const [id, setId] = useState(1);
  
    return (
      <div>
        <PostBody id={id} />
        <button onClick={() => setId(Math.floor(Math.random() * 100) + 1)}>
          Show me a random post
        </button>
        
      </div>
    );
  };

export default RandomPost