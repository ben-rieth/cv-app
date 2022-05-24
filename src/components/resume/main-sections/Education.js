import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

import AddAnotherButton from "../../parts/AddAnotherButton";
import SchoolSubSection from "./School";

const EducationContainer = styled.div`
    padding: 10px 20px;
`;

class EducationSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            schools: [
                <SchoolSubSection id={uniqid()}/>
            ]
        }

        this.addSchool = this.addSchool.bind(this);
    }

    addSchool() {
        this.setState({
            schools: this.state.schools.concat(<hr/>, <SchoolSubSection id={uniqid()} />)
        });
    }

    render() {
        return (
            <EducationContainer>
                <h2>Education</h2>
                {this.state.schools}
                <AddAnotherButton name="Degree" onClick={this.addSchool}/>
            </EducationContainer>
        );
    }
}

export default EducationSection;