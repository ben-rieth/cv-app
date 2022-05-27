import React from "react";
import styled from "styled-components";
import uniqid from 'uniqid';

import AddAnotherButton from "../parts/AddAnotherButton";
import DeleteButton from "../parts/DeleteButton";
import SubSection from "./Subsection";

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

class Section extends React.Component {

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

        const editable = name !== "Contact" ? true : false;

        return (
            <Container>
                <div className="header">
                    <h2>{name}</h2>
                    {editable ? 
                        <DeleteButton
                            onClick={() => {
                                onDelete(id);
                            }} /> :
                        <div></div>
                    }
                </div>
                <hr />
                {this.state.subsections.map((subsection) => {
                    return <SubSection 
                                key={subsection.id}
                                id={subsection.id}
                                type={name}
                                onDelete={this.deleteSection}
                                canDelete={editable}
                            />
                })}
                {editable ?
                    <AddAnotherButton name={subsectionName} onClick={this.addSection} fontSize={1.2}/>
                    : <div></div>
                }
            </Container>
        );
    }
}

Section.defaultProps = {
    name: "Education",
    subsectionName: "Degree"
}

export default Section;