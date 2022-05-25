import React from "react";
import styled from "styled-components";
import AutosizeInput from "../../parts/AutosizeInput";
import DateInput from "../../parts/DateInput";

const PositionContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

class PositionSubSection extends React.Component {

    render() {
        return(
            <PositionContainer>
                <AutosizeInput placeholder="Position/Title" fontSize={1.2} icon={false} />
                <div>
                <AutosizeInput placeholder="Company Name" fontSize={.8} icon={false} />
                    <p>·</p>
                    <AutosizeInput placeholder="Location" fontSize={.8} icon={false} />
                </div>
                <div>
                    <DateInput />
                    <p>-</p>
                    <DateInput />
                </div>
            </PositionContainer>
        );
    }
}

export default PositionSubSection;