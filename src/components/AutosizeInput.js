import React from "react";
import styled from 'styled-components';

const InputWrapper = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    font-size: ${props => props.fontSize}rem;
    font-family: monospace;
`;

const Placeholder = styled.div`
    opacity: 0.3;
    position: absolute;
    left: 10px;
    pointer-events: none;
`;

const Input = styled.span`
    min-width: calc(${props => props.len}ch + 25px);
    border: none;
    outline: none;
    border-bottom: 2px solid lightgrey;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;

    &:focus {
        border-bottom: 2px solid dodgerblue;

        ${'' /* & + .label {
            opacity: 0;
        } */}
    }
`;

class AutosizeInput extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: this.props.initialValue,
            placeholderShown: this.props.initialValue === "" ? true : false
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {

        this.setState({
            value: event.target.textContent,
            placeholderShown: event.target.textContent === "" ? true : false
        });
    }

    stopNewLine(event) {
        if (event.code === "Enter") {
            event.preventDefault();
        }
    }

    render() {
        const {placeholder, fontSize} = this.props;

        return(
            <InputWrapper fontSize={fontSize}>
                <Input 
                    len={placeholder.length}
                    role='textbox' 
                    inputMode="text"
                    contentEditable
                    suppressContentEditableWarning="true"
                    onInput={this.onInputChange}
                    onKeyDown={this.stopNewLine}
                    autoFocus />
                <Placeholder className="label">
                    {this.state.placeholderShown ? placeholder : ''}
                </Placeholder>
            </InputWrapper>
        );
    }

}

AutosizeInput.defaultProps = {
    placeholder: '',
    fontSize: 1,
    initialValue: ""
}

export default AutosizeInput;