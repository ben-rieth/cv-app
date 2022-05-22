import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
    background-color: green;
`;

class Sidebar extends React.Component {
    render() {
        return(
            <SidebarContainer>
                sidebar
            </SidebarContainer>
        );
    }
}

export default Sidebar;