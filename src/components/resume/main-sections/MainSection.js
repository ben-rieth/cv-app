import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

import AddAnotherButton from "../../parts/AddAnotherButton";
import PositionSubSection from "./PositionSubSection";
import SchoolSubSection from "./SchoolSubSection";
import DeleteButton from "../../parts/DeleteButton";
import SubSection from "./SubSection";

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

    & > .header {
        display: flex;
        align-items: center;
    }
`;

class MainSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subsections: [
                {
                    id: uniqid()
                }
            ]
        }

        this.addSection = this.addSection.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
    }

    componentDidUpdate() {
        const {onDelete, id} = this.props;

        if(this.state.subsections.length <= 0) {
            onDelete(id);
        }
    }

    addSection() {
        this.setState((state) => ({
            subsections: state.subsections.concat(
                {
                    id: uniqid()
                }
            )
        }));
    }

    deleteSection(sectionToDelete) {
        this.setState((state) => ({
            subsections: state.subsections.filter(subsection => subsection.id !== sectionToDelete)
        }));
    }

    render() {
        const {name, id, subsectionName, onDelete} = this.props;

        return (
            <Container>
                <div className="header">
                    <h2>{name}</h2>
                    <DeleteButton
                        onClick={() => {
                            onDelete(id);
                        }} />
                </div>
                <hr />
                {this.state.subsections.map((subsection) => {
                    return <SubSection 
                                key={subsection.id}
                                id={subsection.id}
                                type={name}
                                onDelete={this.deleteSection}
                            />
                })};
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