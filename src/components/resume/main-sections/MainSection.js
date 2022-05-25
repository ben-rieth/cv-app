import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

import AddAnotherButton from "../../parts/AddAnotherButton";
import PositionSubSection from "./PositionSubSection";
import SchoolSubSection from "./SchoolSubSection";

const Container = styled.div`
    padding: 10px 20px;

    & > hr {
        border: none;
        background-color: black;
        height: 2px;
        width: 100%:
        opacity: .4;
        margin: 5px 0;
    }
`;

class MainSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subsections: [
                this.getNewSection()
            ]
        }

        this.addSection = this.addSection.bind(this);
        this.getNewSection = this.getNewSection.bind(this);
    }

    addSection() {
        this.setState({
            subsections: this.state.subsections.concat(this.getNewSection())
        });
    }

    getNewSection() {
        const {name} = this.props;

        switch(name) {
            case "Education":
                return <SchoolSubSection 
                            key={uniqid()} />;
            case "Work Experience":
                return <PositionSubSection 
                            key={uniqid()}/>
            default:
                return <SchoolSubSection 
                            key={uniqid()} />
        }

    }

    render() {
        const {name, subsectionName} = this.props;

        return (
            <Container>
                <h2>{name}</h2>
                <hr />
                {this.state.subsections}
                <AddAnotherButton name={subsectionName} onClick={this.addSection}/>
            </Container>
        );
    }
}

MainSection.defaultProps = {
    name: "Education",
    subsectionName: "Degree"
}

export default MainSection;