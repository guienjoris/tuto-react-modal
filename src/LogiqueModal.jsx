import {useState} from 'react';

const LogiqueModale = () =>{
    const [revele,setRevele]= useState(false);
    function toggle(){
        setRevele(!revele)
    }
    return{
        revele,
        toggle
    }
}

export default LogiqueModale;