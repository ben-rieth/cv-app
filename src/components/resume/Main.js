import React from "react";
import { flushSync } from "react-dom";
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
        this.deleteSection = this.deleteSection.bind(this);
    }

    createSection(sectionType, subName) {
        const sectionId = uniqid();
        this.setState({
            sections: this.state.sections.concat(
                {
                    id: sectionId,
                    name: sectionType,
                    subName: subName
                }
            ),
            options: this.state.options.filter(option => option.optionName !== sectionType)
        });
    }

    deleteSection(sectionToDelete) {

        this.setState((state) => ({
            sections: state.sections.filter(section => section.id !== sectionToDelete),
        }));

        this.setState((state) => ({
            options: this.dropdownOptions.filter(option => {
                return !state.sections.map(section => {
                    return section.name;
                }).includes(option.optionName)
            }),
        }));
    }

    render() {
        
        const {sections, options} = this.state;

        return(
            <MainContainer>
                {sections.map((section) => {
                    return <MainSection 
                                key={section.id}
                                id={section.id} 
                                name={section.name} 
                                subsectionName={section.subName}
                                onDelete={this.deleteSection} />
                })}
                <AddSectionDropdown 
                    options={options}
                />
            </MainContainer>
        );
    }
}

export default Main;