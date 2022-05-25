import React from "react";
import styled from "styled-components";
import DeleteButton from "../../parts/DeleteButton";
import AwardSubSection from "./AwardSubSection";
import OrganizationSubSection from "./OrganizationSubSection";
import PositionSubSection from "./PositionSubSection";
import ProjectSubSection from "./ProjectSubSection";
import SchoolSubSection from "./SchoolSubSection";

const SubSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 5px;

    & > .subsection-form {
        display: flex;
        flex-direction: column;
        gap: 2px;
        margin-bottom: 10px;

        & > .row {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    & > .delete {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: red;
        opacity: 0.2;
        top: 0;
        left: -1px;
        pointer-events: none;
    } 

    & > .blank {
        position: absolute;
    }  
`;

class SubSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveringOverDelete: false
        }

        this.overDeleteButton = this.overDeleteButton.bind(this);
        this.leaveDeleteBUtton = this.leaveDeleteBUtton.bind(this);
    }

    overDeleteButton() {
        this.setState({
            hoveringOverDelete: true
        });
    }

    leaveDeleteBUtton() {
        this.setState({
            hoveringOverDelete: false
        })
    }

    render() {
        const { type, id, onDelete } = this.props;
        const {hoveringOverDelete} = this.state;


        let subsection;
        switch(type) {
            case "Education":
                subsection=<SchoolSubSection/>;
                break;
            case "Work Experience":
                subsection=<PositionSubSection/>;
                break;
            case "Awards":
                subsection=<AwardSubSection />;
                break;
            case "Projects":
                subsection=<ProjectSubSection />;
                break;
            case "Organizations":
                subsection=<OrganizationSubSection />
                break;
            default:
                break;
        }

        return(
            <SubSectionContainer>
                {subsection}
                <DeleteButton 
                    onClick={() => {
                        onDelete(id)
                    }} 
                    onMouseEnter={this.overDeleteButton}
                    onMouseLeave={this.leaveDeleteBUtton}
                    />    
                {hoveringOverDelete ? 
                    <div className="delete"></div> :
                    <div className="blank"></div> }
            </SubSectionContainer>
        );
    }
}



export default SubSection;