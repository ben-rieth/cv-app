import React from "react";
import styled from "styled-components";
import AddSectionDropdown from "../AddSectionDropdown";

const MainContainer = styled.div`
    border: 1px solid red;
    grid-area: main;
`;

class Main extends React.Component {
    render() {
        return(
            <MainContainer>
                <AddSectionDropdown 
                    options={[
                        {
                            optionName: "Education",
                            id: 1,
                            onSelectOption: () => alert("Education")
                        },
                        {
                            optionName: "Work Experience",
                            id: 2,
                            onSelectOption: () => alert("Work")
                        },
                        {
                            optionName: "Projects",
                            id: 3,
                            onSelectOption: () => alert("Projects")
                        }
                    ]}
                />
            </MainContainer>
        );
    }
}

export default Main;