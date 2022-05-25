import React from "react";
import styled from "styled-components";
import DeleteButton from "../../parts/DeleteButton";

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
        const { form } = this.props;

        return(
            <SubSectionContainer>
                {form}
                <DeleteButton />
            </SubSectionContainer>
        );
    }
}



export default SubSection;