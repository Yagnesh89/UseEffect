import {useState} from 'react'
var setState=null;
var state=null;
export default function Decorator(a)
    {
        var [newstate,setvalue] = useState(a);
        state=newstate;
        setState=setvalue
        const setnewstate = (c) =>{
            addToQueue(c);
        }
        return [newstate,setnewstate];
    }
var queue=[];
var working=false;
function queueHandler(){
    working=true;
    // console.log("-------------------------------->STARTING")
    while(queue.length>0){
        // console.log("-------------------------------->QUEUE=>",JSON.stringify(queue))   
        setState({...state,...queue.pop()});
    }
    working=false;
    // console.log("-------------------------------->STOPPING")
}
function addToQueue(newState){
    queue.push(newState)
    if(!working){
        queueHandler();
    }
}
 

/* 
export default function Decorator(a)
    {
        var [newstate,setvalue] = useState(a);
        const setnewstate = (c) =>{
            setvalue({...newstate,...c});
        }
        return [newstate,setnewstate];
    } */