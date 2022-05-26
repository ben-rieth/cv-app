import React from "react";
import styled from "styled-components";
import AutosizeInput from "./AutosizeInput";

import LocationIcon from "./../../images/location.svg";

const InputContainer = styled.div`
    display: flex;
    gap: 5px;

    & > img {
        width: 1rem;
    }
`;

class AddressInput extends React.Component {

    render() {
        return(
            <InputContainer>
                <img src={LocationIcon} alt="" />
                <AutosizeInput placeholder="City Name" fontSize={.8} />
                <p>,</p>
                <AutosizeInput placeholder="ST" fontSize={.8} characterLimit={2} addLip={false}/>
            </InputContainer>
        )
    }

}

export default AddressInput;