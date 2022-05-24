import React from "react";
import styled from 'styled-components';

import CheckCircleIcon from './../../images/check_circle.svg';

const InputWrapper = styled.div`
    width: calc(${props => props.len}ch + ${props=>props.spaceForIcon}rem + 5px);
    max-width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    font-size: ${props => props.fontSize}rem;
    font-family: monospace;

    border-bottom: ${props => props.focused ? '2px solid dodgerblue' : '2px solid lightgrey'}
`;

const Placeholder = styled.div`
    opacity: 0.3;
    position: absolute;
    pointer-events: none;
`;

const ValidityIcon = styled.img`
    position: absolute;
    left: min(calc(${props => props.distance}ch + 5px), 100%);
    pointer-events: none;
    width: ${props => props.iconWidth}rem;
    filter: invert(96%) sepia(81%) saturate(3047%) hue-rotate(79deg) brightness(96%) contrast(112%);
`;

const Input = styled.span`
    width: min(${props => props.len}ch, 100%);
    border: none;
    outline: none;
    padding: 0 0 2px 0;
    white-space: nowrap;
    overflow: hidden;

    ${'' /* border-bottom: 2px solid lightgrey;
    &:focus {
        border-bottom: 2px solid dodgerblue;
    } */}
`;

class AutosizeInput extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: this.props.initialValue,
            placeholderShown: this.props.initialValue === "" ? true : false,
            focused: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.stopIfPastCharacterMax = this.stopIfPastCharacterMax.bind(this);
        this.doesInputMatchPattern = this.doesInputMatchPattern.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onPaste = this.onPaste.bind(this);
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
                return false;
            }
        }

        return true;
    }

    onKeyDown(event) {
        this.stopNewLine(event);
        this.stopIfPastCharacterMax(event);
    }

    onFocus() {
        this.setState({
            focused: true
        })
    } 

    onBlur() {
        this.setState({
            focused: false
        })
    }

    onPaste(event) {
        event.preventDefault();
        const text = event.clipboardData.getData('text/plain');
        event.target.textContent += text;

        this.setState({
            value: event.target.textContent,
            placeholderShown: event.target.textContent === "" ? true : false,
            matchesPattern: this.doesInputMatchPattern(event)
        })
    }

    render() {
        const {placeholder, fontSize, icon} = this.props;
        const {value, placeholderShown, matchesPattern, focused} = this.state;

        let elementLength = value.length >= placeholder.length ? value.length : placeholder.length;

        return(
            <InputWrapper 
                    fontSize={fontSize}
                    len={elementLength} 
                    spaceForIcon={fontSize}
                    focused={focused}>
                <Input
                    len={elementLength}
                    role='textbox' 
                    inputMode="text"
                    contentEditable
                    suppressContentEditableWarning="true"
                    onInput={this.onInputChange}
                    onKeyDown={this.onKeyDown}
                    onFocus={this.onFocus} 
                    onBlur={this.onBlur}
                    onPaste={this.onPaste}
                    />
                <Placeholder className="label">
                    {placeholderShown ? placeholder : ''}
                </Placeholder>
                {matchesPattern && !placeholderShown && icon  ? 
                    <ValidityIcon src={CheckCircleIcon} iconWidth={fontSize} distance={elementLength}/> : <div></div>}
            </InputWrapper>
        );
    }

}

AutosizeInput.defaultProps = {
    placeholder: '',
    fontSize: 1,
    initialValue: "",
    characterLimit: 500,
    pattern: /[\s\S]*/,
    icon: true
}

export default AutosizeInput;