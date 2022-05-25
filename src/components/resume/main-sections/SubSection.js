import React from "react";
import styled from "styled-components";
import DeleteButton from "../../parts/DeleteButton";
import PositionSubSection from "./PositionSubSection";
import SchoolSubSection from "./SchoolSubSection";

const SubSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
`;

class SubSection extends React.Component {
    render() {
        const { type, id, onDelete } = this.props;

        let subsection;
        switch(type) {
            case "Education":
                subsection=<SchoolSubSection/>
                break;
            case "Work Experience":
                subsection=<PositionSubSection/>
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
                    }} />       
            </SubSectionContainer>
        );
    }
}



export default SubSection;