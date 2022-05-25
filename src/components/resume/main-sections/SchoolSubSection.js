import React from "react";
import styled from "styled-components";
import AutosizeInput from "../../parts/AutosizeInput";
import DateInput from "../../parts/DateInput";
import StartEndDateInput from "../../parts/StartEndDateInput";

const SchoolContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

class SchoolSubSection extends React.Component {
    render() {
        return (
            <SchoolContainer>
                <AutosizeInput placeholder="Degree Name" fontSize={1.2} />
                <AutosizeInput placeholder="School Name" fontSize={1}/>
                
                <StartEndDateInput />
            </SchoolContainer>
        );
    }
}

export default SchoolSubSection;