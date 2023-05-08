import React, { useEffect, useState } from 'react';


const Time:React.FC<{}> = () => {

    const [message, setMessage] = useState("");
    // const [mJson, setMjson] = useState({age:null,name:null});
    useEffect(()=>{
      fetch("/time")
        .then(res => res.text())
        .then(m=>setMessage(m))

    
        fetch("/example")
        .then(res => res.json())
        .then(m =>console.log(m))
        

    }, [])
    return (
        <div>
            컴포넌트 Time: {message}
            json:
        </div>
        
    );
};

export default Time;