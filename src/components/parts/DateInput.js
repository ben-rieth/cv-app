import React from "react";
import styled from "styled-components";
import AutosizeInput from "./AutosizeInput";

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    & p {
        opacity: 0.3;
    }
`;

class DateInput extends React.Component {

    render() {
        return (
            <DateContainer>
                <AutosizeInput placeholder="mm" fontSize=".75" characterLimit={2} pattern={/[0-1]\d/} icon={false} addLip={false}/>
                <p>/</p>
                <AutosizeInput placeholder="yyyy" fontSize=".75" characterLimit={4} pattern={/[1-2]\d{3}/} icon={false} addLip={false}/>
            </DateContainer>
        );
    }
}

export default DateInput;