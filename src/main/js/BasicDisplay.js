import React, {useEffect, useState} from 'react';
import {getFromServer, postToServer} from "./Comm";

function BasicTextComponent(){
    return "Basic Text displayed on screen"
}

function ClientClickCounter(props){
    const [clickCount, setClickCount] = useState(props.clickCount);

    return (
        <div>
            <h3>Client Click Counter</h3>
            You have clicked the button {clickCount} times.<br/>
            <button onClick={() => setClickCount(clickCount + 1)}>increment</button>
        </div>
    );
}

function ServerClickCounter(){
    const [clickCount, setClickCount] = useState(0);

    useEffect(
        () => {
            getFromServer(
                "api/",
                "clickCount",
                (resp)=>setClickCount(resp.clickCount))
        },
        []
    );

    return (
        <div>
            <h3>Server Click Counter</h3>
            The server says have clicked the button {clickCount} times.<br/>
            <button onClick={() =>
                postToServer(
                    "api/",
                    "incrementClickCount",
                    null,
                    (resp)=>setClickCount(resp.clickCount)
                )
            }>
                increment
            </button>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <BasicTextComponent/>
            <ClientClickCounter clickCount={0}/>
            <ServerClickCounter />
        </div>
    );
}