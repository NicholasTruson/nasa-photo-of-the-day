import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";

import styled from "styled-components";

const CreateEntry = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [photo, setPhotoSource] = useState();
    const [blog, setBlogText] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setPhotoSource(response.data.url);
                setBlogText(response.data.explanation);
                console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <Main title = {title} image = {photo} day = {date} text = {blog} /> 
        </div>
    )
}

export default CreateEntry;