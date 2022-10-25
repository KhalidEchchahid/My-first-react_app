import React from "react";
import '../App.css';
import './style.css'

export default function Header() {
    //internel style 
    // if(client === 'react js'){
    //     title = 'My first project in react js '
    // }else if(client === 'bootstrap'){
    //     title = 'My first project in bootstrap '
    // }
    const client = 'bootstrap'
    const title = {
        react : 'react js' ,
        bootstrap : 'bootstrap'
    }

    const info ={
         name : 'vbnhn',
         nick : 'ECHCHAHID'
    }
    
    return (

        <div className="navbar bg-dark rounded text-white">
            
            <h1>Hello {` ${info.name} | ${info.nick} `} . My first project in {client == "bootstrap" ?  title.bootstrap : title.react }
            </h1>
        </div>
    );
}



/* style={{color:"red"}} == document.querySelector('root').style.color = "red" */