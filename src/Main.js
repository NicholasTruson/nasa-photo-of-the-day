import React from "react";
//import CreateMain from "./CreateMain";

import styled from "styled-components";

const Main = props => {
    return (
        <SytledMain>
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h3>{props.day}</h3>
            <p>{props.text}</p>
        </SytledMain>
    )
}

const SytledMain = styled.div`
width:90%;
margin: 2%;
padding: 2%;
object-fit: scale-down;
background: lightgrey;
justify-content: center;
align-content: center;
`;

export default Main;

























/* Sytled Practice

const Main = styled.main`
    width: 90%;
`;

${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
${props => (props.type === 'success' ? `background: #4caf50;` : null)}
${props => (props.type === 'danger' ? `background: #f44336;` : null)}
${props => (props.type === 'warning' ? `background: #fdd835;` : null)}

    return (
        <main>
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h3>{props.day}</h3>
            <p>{props.text}</p>
        </main>
    );


export default Main;*/