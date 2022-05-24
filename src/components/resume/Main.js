import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";

import AddSectionDropdown from "../parts/AddSectionDropdown";
import MainSection from "./main-sections/MainSection";

const MainContainer = styled.div`
    border: 1px solid red;
    grid-area: main;
`;

class Main extends React.Component {

    dropdownOptions = [
        {
            optionName: "Education",
            id: 1,
            onSelectOption: () => this.createSection("Education", "Degree")
        },
        {
            optionName: "Work Experience",
            id: 2,
            onSelectOption: () => this.createSection("Work Experience", "Position")
        },
        {
            optionName: "Projects",
            id: 3,
            onSelectOption: () => this.createSection("Projects", "Project")
        },
        {
            optionName: "Achievements",
            id: 4,
            onSelectOption: () => this.createSection("Achievements", "Achievement")
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            sections: [],
            options: this.dropdownOptions
        }

        this.createSection = this.createSection.bind(this);
    }

    createSection(sectionType, subName) {
        this.setState({
            sections: this.state.sections.concat(<MainSection key={uniqid()} name={sectionType} subsectionName={subName}/>),
            options: this.state.options.filter(option => option.optionName !== sectionType)
        });
    }

    render() {
        
        const {sections, options} = this.state;

        return(
            <MainContainer>
                {sections}
                <AddSectionDropdown 
                    options={options}
                />
            </MainContainer>
        );
    }
}

export default Main;