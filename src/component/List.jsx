import { useEffect, useState } from "react"

const Window = ({hover,temp}) =>{
    // console.log(temp)
    const [mousePosition , setMousePosition] = useState({x:0,y:0})

    const handleMouseMove = (e) => {
        setMousePosition({
          x: e.pageX,
          y: e.pageY,
        });
      };
    
    useEffect(() => {
        if (hover) {
          window.addEventListener('mousemove', handleMouseMove);
        } else {
          window.removeEventListener('mousemove', handleMouseMove);
        }


        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hover]);

    return (
        <div style={{
            position: 'absolute',
            top: `${mousePosition.y-90}px`,
            left: `${mousePosition.x+22}px`,
            padding: '20px',
            height: '180px',
            width: '260px',
            background: '#21b3ff',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            borderRadius:'6px',
            transition: 'opacity 0.5s',
          }}>
            {temp}
        </div>
    )
}

const List = ({post})=>{
    const [hover,sethover] = useState(false);
    const [temp,setTemp] = useState(null);

    return(
        <>
            <ul className="list-container">
                {post.data.map((itr,index)=>{
                    return(
                            <li key = {itr.id} onMouseEnter={()=>{sethover(true);setTemp(itr.id-1)}} onMouseLeave={()=>{sethover(false)}}> 
                                {itr.title} 
                            </li>    
                    )
                })}
            </ul>
        
            {hover && <Window hover={hover} temp={post.data[temp].body}></Window>}
            <h1>end of list</h1>
        </>
    )
}



export default List;