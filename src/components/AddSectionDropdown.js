import React from "react";
import styled from 'styled-components';

import AddIcon from './../images/add.svg';

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    padding: 0;
    background-color: white;
    width: 100%;
`;

const DropdownContent = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    width: 100%;
    background-color: transparent;
    

    & > button {
        color: black;
        padding: 12px 16px;
        width: 100%;
    }
`;

const DropButton = styled.button`
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;

    & > img {
        width: 35px;
    }

    & > p {
        font-size: 1.5rem;
    }
`;

class AddSectionDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownVisible: false
        }

        this.showDropdownItems = this.showDropdownItems.bind(this);
    }

    showDropdownItems() {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        });
    }

    render() {
        const {options} = this.props;
        return(
            <DropdownContainer>
                <DropButton onClick={this.showDropdownItems}>
                    <img src={AddIcon} alt="add" />
                    <p>Add Main Section</p>
                </DropButton>
                <DropdownContent visible={this.state.dropdownVisible}>
                    {options.map((option) => {
                        return <button key={option.id} onClick={option.onSelectOption}>
                            {option.optionName}
                        </button>
                    })};
                </DropdownContent>
            </DropdownContainer>
        )
    }

}

AddSectionDropdown.defaultProps= {
    options: []
}

export default AddSectionDropdown;