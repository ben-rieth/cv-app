import React from "react";
import styled from 'styled-components';

import Header from './resume/Header';
import Sidebar from "./resume/Sidebar";
import Main from "./resume/Main";

const DisplayContainer = styled.div`
    margin: 0 5vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas:
        "header  header"
        "sidebar main"
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