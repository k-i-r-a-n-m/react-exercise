import React,{useState,useEffect} from 'react'


const UseEffectHook=()=>{
    const [data,setData] = useState([])
    const [type,setType] = useState('users')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(list=>setData(list))
        console.log(data)
        
    },[type])   

    function postHandler(e){
        setType('posts')
    }

    function userHandler(e){
        setType('users')
    }

  return (
    
    <div>
        
        <button onClick={postHandler}>posts</button>
        <button onClick={userHandler}>users</button>
        {data.map(e=><p key={e.id} >{JSON.stringify(e)}</p>)}
    </div>
  )
}


export default UseEffectHook