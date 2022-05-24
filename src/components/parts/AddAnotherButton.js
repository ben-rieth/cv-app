import React from "react";
import styled from "styled-components";

import AddIcon from './../../images/add.svg';

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        transform: scale(1.05)
    }

    & > img {
        width: 30px;
    }  

    & > p {

    }
`;

class AddAnotherButton extends React.Component {
    render() {
        const { name, onClick } = this.props;

        return(
            <Button onClick={onClick}>
                <img src={AddIcon} alt="add" />
                <p>{`Add Another ${name}`}</p>
            </Button>
        )
    }
}

export default AddAnotherButton;