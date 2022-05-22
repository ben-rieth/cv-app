import React from "react";
import styled from 'styled-components';

import Header from './resume/Header';
import Sidebar from "./resume/Sidebar";
import Main from "./resume/Main";

const DisplayContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas:
        "header  header"
        "sidebar main"
`;

const HeaderGridArea = styled.div`
    grid-area: header;
`;

const MainGridArea = styled.div`
    grid-area: main;
`;

const SidebarGridArea = styled.div`
    grid-area: sidebar;
`;

class ResumeDisplay extends React.Component {

    render() {
        return (
            <DisplayContainer>
                <HeaderGridArea>
                    <Header />
                </HeaderGridArea>

                <SidebarGridArea>
                    <Sidebar />
                </SidebarGridArea>

                <MainGridArea>
                    <Main />
                </MainGridArea>
                
            </DisplayContainer>
        );
    }

}

export default ResumeDisplay;