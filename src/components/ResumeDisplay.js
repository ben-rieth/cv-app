import React from "react";
import styled from 'styled-components';

import Header from './resume/Header';
import Sidebar from "./resume/Sidebar";
import Main from "./resume/Main";

const DisplayContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr 9fr;
    grid-template-areas:
        "sidebar  header"
        "sidebar main";
    width: clamp(700px, 90vw, 1300px);
    aspect-ratio: 1 / 1.2941;
`;

class ResumeDisplay extends React.Component {

    render() {
        return (
            <DisplayContainer>
                <Header />
                <Sidebar />
                <Main />              
            </DisplayContainer>
        );
    }

}

export default ResumeDisplay;