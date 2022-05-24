import React from "react";
import styled from "styled-components";
import AutosizeInput from "../../parts/AutosizeInput";

const SchoolContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`;

class SchoolSubSection extends React.Component {
    render() {
        return (
            <SchoolContainer>
                <AutosizeInput placeholder="Degree Name" fontSize={1.2} />
                <AutosizeInput placeholder="School Name" fontSize={1}/>
                <div>
                    <AutosizeInput placeholder="Start Date" fontSize={.75}/>
                    <p> - </p>
                    <AutosizeInput placeholder="End Date" fontSize={.75}/>
                </div>
            </SchoolContainer>
        );
    }
}

export default SchoolSubSection;