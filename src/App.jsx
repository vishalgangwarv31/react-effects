import { useEffect, useState } from 'react'
import List from './component/list';
import axios from 'axios'
import './App.css'

function App() {
  const [post,setPost] = useState('');

  useEffect(()=>{
    async function getpost() {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(data);
    }
    getpost();
  },[])
  
  return (
    <>  
      <div className='app-container'>
          <h1>List of projects</h1>
          {post&&<List post={post}></List>}
      </div>
      <div>
        <p>confirm</p>
      </div>
    </>
  )
}



export default App
