import { useEffect, useState } from 'react';

const PostBody = ({ id }) => {
  const [text, setText] = useState('');
  const [error,setError]=useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setText(data.body);
      })
      .catch(err=>setError(err))
  }, [id]);

  return <div>
            {error && (<div> Something went wrong !!!</div>)}
            
            {!error && (<div>{text}</div>)}
        </div>;
};

export default PostBody;