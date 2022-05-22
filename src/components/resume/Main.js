import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    background-color: red;
    grid-area: main;
`;

class Main extends React.Component {
    render() {
        return(
            <MainContainer>
                main
            </MainContainer>
        );
    }
}

export default Main;