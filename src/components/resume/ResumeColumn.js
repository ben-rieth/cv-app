import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";

import AddSectionDropdown from "../parts/AddSectionDropdown";
import { mainDropdownOptions, sidebarDropdownOptions } from "../resources/DropdownOptions";
import MainSection from "./main-sections/MainSection";

const ColumnContainer = styled.div`
    border: 1px solid red;
    grid-area: ${props => props.colType};
`;

class ResumeColumn extends React.Component {

    constructor(props) {
        super(props);

        this.dropdownOptions = this.getDropdownOptions();

        this.state = {
            sections: [],
            options: this.dropdownOptions
        }

        this.getDropdownOptions = this.getDropdownOptions.bind(this);
        this.createSection = this.createSection.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
    }

    getDropdownOptions() {
        const {type} = this.props;

        switch(type) {
            case "main":
                return mainDropdownOptions;
            case "sidebar":
                return sidebarDropdownOptions;
            default:
                break;
        }
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
        const {type} = this.props;

        return(
            <ColumnContainer colType={type}>
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
                    onSelection={this.createSection}
                    header="Add Section"
                />
            </ColumnContainer>
        );
    }
}

export default ResumeColumn;