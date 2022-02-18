import { useEffect } from "react";
import { useState } from "react";


export default function Main(){

    
    const [loaded, setLoaded] = useState(false);

    const [data, setData] = useState();

    
    async function getData(){
        return await fetch("http://localhost:5000/").then(res=>res.json()).then(data=>data.data).then(d=>setData(d));
      }

    async function getInfo(){
        return await fetch("http://localhost:5000/infos").then(res=>res.json()).then(data=>data.data).then(d=>setData(d));
      }

    useEffect(()=>{
        setLoaded(true);
    }, [data]);

    if(!loaded){
    getInfo();
}



return(
    <div>
    {loaded && <p>{data?.join(', ')}</p> }
    </div>
);

}