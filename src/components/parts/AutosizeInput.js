import React from "react";
import styled from 'styled-components';

import CheckCircleIcon from './../../images/check_circle.svg';

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
    pointer-events: none;
`;

const ValidityIcon = styled.img`
    position: absolute;
    left: calc(${props => props.distance}ch + 5px);
    pointer-events: none;
    width: ${props => props.iconWidth}rem;
    filter: invert(96%) sepia(81%) saturate(3047%) hue-rotate(79deg) brightness(96%) contrast(112%);
`;

const Input = styled.span`
    min-width: calc(${props => props.len}ch + ${props=>props.spaceForIcon}rem);
    max-width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid lightgrey;
    padding: 0 0 2px 0;
    white-space: nowrap;
    overflow: hidden;

    &:focus {
        border-bottom: 2px solid dodgerblue;
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
        this.onKeyDown = this.onKeyDown.bind(this);
        this.stopIfPastCharacterMax = this.stopIfPastCharacterMax.bind(this);
        this.doesInputMatchPattern = this.doesInputMatchPattern.bind(this);
    }

    doesInputMatchPattern(event) {
        const {pattern} = this.props;
        return pattern.test(event.target.textContent);    
    }

    onInputChange(event) {
        const { characterLimit } = this.props;

        if (event.target.textContent.length < characterLimit) {
            this.setState({
                value: event.target.textContent,
                placeholderShown: event.target.textContent === "" ? true : false,
                matchesPattern: this.doesInputMatchPattern(event)
            });
        }

        console.log(this.props.pattern,
            'matches', 
            event.target.textContent,
            ":",
            this.doesInputMatchPattern(event));
    }

    stopNewLine(event) {
        if (event.code === "Enter") {
            event.preventDefault();
        }
    }

    stopIfPastCharacterMax(event) {
        const { characterLimit } = this.props;

        if(event.target.textContent.length >= characterLimit) {
            if(event.code !== "Backspace" && event.code !== "Delete") {
                event.preventDefault();
            }
        }
    }

    onKeyDown(event) {
        this.stopNewLine(event);
        this.stopIfPastCharacterMax(event);
    }

    render() {
        const {placeholder, fontSize} = this.props;
        const {value, placeholderShown, matchesPattern} = this.state;

        let elementLength = value.length >= placeholder.length ? value.length : placeholder.length;

        return(
            <InputWrapper fontSize={fontSize}>
                <Input 
                    len={elementLength}
                    spaceForIcon={fontSize}
                    role='textbox' 
                    inputMode="text"
                    contentEditable
                    suppressContentEditableWarning="true"
                    onInput={this.onInputChange}
                    onKeyDown={this.onKeyDown}
                    autoFocus />
                <Placeholder className="label">
                    {placeholderShown ? placeholder : ''}
                </Placeholder>
                {matchesPattern && !placeholderShown ? 
                    <ValidityIcon src={CheckCircleIcon} iconWidth={fontSize} distance={elementLength}/> : <div></div>}
            </InputWrapper>
        );
    }

}

AutosizeInput.defaultProps = {
    placeholder: '',
    fontSize: 1,
    initialValue: "",
    characterLimit: 100,
    pattern: /[\s\S]*/
}

export default AutosizeInput;