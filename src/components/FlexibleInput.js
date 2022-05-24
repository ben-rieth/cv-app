import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: ${props => props.inputLength}ch;

    font-family: monospace;
    font-size: ${props => props.fontSize}rem;
    border: none;
    border-bottom: 2px solid black;
    padding: 10px 20px;

    &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid dodgerblue;
    }
`;

class FlexibleInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            inputLength: this.props.placeholder.length
        }
        console.log(this.props.placeholder.length)
    }

    onInputChange = (event) => {
        
        const {placeholder} = this.props; 

        this.setState({
            value: event.target.value,
        });

        this.setState((state) => ({
            inputLength: state.value.length < placeholder.length ? placeholder.length+1 : state.value.length+1
        }));
    }

    render() {
        const { id, name, placeholder, fontSize, maxCharacters} = this.props;

        return (
            <Input
                inputLength={this.state.inputLength}
                fontSize={fontSize}
                maxLength={maxCharacters}
                type="text" 
                name={name} 
                id={id}
                onChange={this.onInputChange}
                placeholder={placeholder}
                autoFocus />
        );
    }
}

FlexibleInput.defaultProps = {
    name: 'flex',
    id: 'flex-input',
    placeholder: "",
    fontSize: 1,
    maxCharacters: 524288
}

export default FlexibleInput;