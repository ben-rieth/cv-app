import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: ${props => props.length}ch;
    max-width: ${props => props.max}px;

    font-family: monospace;
    font-size: ${props => props.fontSize}rem;
    border: none;
    border-bottom: 2px solid black;
    padding: .5em .5em;

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
        const { id, name, placeholder, fontSize, maxWidth, maxCharacters} = this.props;

        return (
            <Input
                length={this.state.inputLength}
                fontSize={fontSize}
                max={maxWidth}
                maxLength={maxCharacters}
                type="text" 
                name={name} 
                id={id}
                onInput={this.onInputChange}
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
    maxWidth: 100,
    maxCharacters: 524288
}

export default FlexibleInput;