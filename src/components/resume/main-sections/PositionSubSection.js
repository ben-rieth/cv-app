import React from "react";
import styled from "styled-components";
import AutosizeInput from "../../parts/AutosizeInput";
import StartEndDateInput from "../../parts/StartEndDateInput";

const PositionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 10px;

    & > .company {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

class PositionSubSection extends React.Component {

    render() {
        return(
            <PositionContainer>
                <AutosizeInput placeholder="Position/Title" fontSize={1.2}/>
                <div className="company">
                    <AutosizeInput placeholder="Company Name" fontSize={.8}/>
                    <p>·</p>
                    <AutosizeInput placeholder="Location" fontSize={.8}/>
                </div>
                <StartEndDateInput />
            </PositionContainer>
        );
    }
}

export default PositionSubSection;