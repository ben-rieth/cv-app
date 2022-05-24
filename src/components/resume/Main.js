import React from "react";
import styled from "styled-components";
import AddSectionDropdown from "../parts/AddSectionDropdown";
import EducationSection from "./main-sections/Education";

const MainContainer = styled.div`
    border: 1px solid red;
    grid-area: main;
`;

class Main extends React.Component {

    dropdownOptions = [
        {
            optionName: "Education",
            id: 1,
            onSelectOption: () => this.createSection("Education")
        },
        {
            optionName: "Work Experience",
            id: 2,
            onSelectOption: () => this.createSection("Work Experience")
        },
        {
            optionName: "Projects",
            id: 3,
            onSelectOption: () => this.createSection("Projects")
        },
        {
            optionName: "Achievements",
            id: 4,
            onSelectOption: () => this.createSection("Achievements")
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

    createSection(sectionType) {
        this.setState({
            sections: this.state.sections.concat(<h1 key={sectionType}>{sectionType}</h1>),
            options: this.state.options.filter(option => option.optionName !== sectionType)
        });
    }

    render() {
        
        const {sections, options} = this.state;

        return(
            <MainContainer>
                <EducationSection />
                <AddSectionDropdown 
                    options={options}
                />
            </MainContainer>
        );
    }
}

export default Main;