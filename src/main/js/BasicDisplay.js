import React, {useEffect, useState} from 'react';
import {getFromServer, postToServer} from "./Comm";
import ReactQuestionAndAnswer from "./ReactQuestionAndAnswer";

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
    const sampleQuestion1 = {
        id: "sampleQuestionID",
        questionText: "What is my favorite ice cream flavor?",
        correctAnswer: "vanilla",
        possibleAnswers: ["chocolate", "strawberry", "vanilla"]
    };

    const sampleQuestion2 = {
        id : "600-plane-./images/Annotated1BTrans.jpg",
        type : "plane",
        questionText : "On which plane is the ultrasound taken?",
        correctAnswer : "transverse (short axis)",
        possibleAnswers : [ "transverse (short axis)", "longitudinal (long axis)" ],
        imageUrl : "./images/Annotated1BTrans.jpg"
    }

    return (
        <ReactQuestionAndAnswer data={sampleQuestion1}/>
    );
}