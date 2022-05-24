import React from "react";
import styled from 'styled-components';

import CheckCircleIcon from './../../images/check_circle.svg';

/**
 * A StyledComponent div which contains the input, placeholder, and validity icon
 * @property {number} len - the length of the current value
 * @property {number} fontSize - the font size of the input, also used to leave space for the icon at the end of the input
 * @property {boolean} focused - whether or not the input is focused
 */
const InputWrapper = styled.div`
    width: calc(${props => props.len}ch + ${props=>props.fontSize}rem + 5px);
    max-width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    font-size: ${props => props.fontSize}rem;
    font-family: monospace;

    border-bottom: ${props => props.focused ? '2px solid dodgerblue' : '2px solid lightgrey'}
`;

/**
 * A StyledComponent div that represents the placeholder for the input
 */
const Placeholder = styled.div`
    opacity: 0.3;
    position: absolute;
    pointer-events: none;
`;

/**
 * A StyledComponent img for the validity icon
 * @property {number} iconWidth - the width of the icon, set the the fontSize of the input
 * @property {number} distance - the length of the input, makes sure the icon always stays at the edge of the input
 */
const ValidityIcon = styled.img`
    position: absolute;
    left: min(calc(${props => props.distance}ch + 5px), 100%);
    pointer-events: none;
    width: ${props => props.iconWidth}rem;
    filter: invert(96%) sepia(81%) saturate(3047%) hue-rotate(79deg) brightness(96%) contrast(112%);
`;
/**
 * A StyledComponent span for the input
 * @property {number} len - the length of the placeholder or the current input value, whichever is longer
 */
const Input = styled.span`
    width: min(${props => props.len}ch, 100%); /* sets the max width at the width of the input wrapper so input doesn't go off screen*/
    border: none;
    outline: none;
    padding: 0 0 2px 0;
    white-space: nowrap; /* makes sure that the input cannot become more than one line*/
    overflow: hidden;
`;

/**
 * A component representing an input which will grow with the user's input
 */
class AutosizeInput extends React.Component {

    /**
     * Constructor for creating an input
     * 
     * @property {string}  [placeholder=""]     - the string that is display before text is entered
     * @property {number}  [fontSize=1]         - the font size of the input in rem units
     * @property {string}  [initialValue=""]    - the initial value of the input before editing
     * @property {number}  [characterLimit=500] - the maximum amount of characters the input will allow
     * @property {regex}   [pattern='[\s\S]*']  - the regex pattern the string must match
     * @property {boolean} [icon=true]          - whether or not the validity icon is displayed
     * 
     * @param {object}  state                   - the React state object for this component
     * @param {string}  state.value             - the current value of the input
     * @param {boolean} state.placeholderShown  - whether or not the placeholder is currently shown
     * @param {boolean} state.focused           - whether or not the input is currently focused
     * @param {boolean} state.matchesPattern    - whether or not the input matches the pattern
     */
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

    /**
     * Returns whether or not the input from the event matches the pattern
     * 
     * @param {Event} event - an event representing the user adding text to the input
     * 
     * @returns {boolean}   - whether or not the input matches the given pattern
     */
    doesInputMatchPattern(event) {
        const {pattern} = this.props;
        return pattern.test(event.target.textContent);    
    }

    /**
     * Updates the value of the component every time the user adds input
     * 
     * @param {Event} event - an event representing the user adding text to the input 
     */
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

    /**
     * Prevents the user from using the enter key to create a new line
     * 
     * @param {Event} event - an event representing the user pressing down a key on the keyboard
     */
    stopNewLine(event) {
        if (event.code === "Enter") {
            event.preventDefault();
        }
    }

    /**
     * Prevents the user from entering more characters if they are past the maximum amount of characters
     * 
     * @param {Event} event - an event representing the user pressing down a key on the keyboard
     */
    stopIfPastCharacterMax(event) {
        const { characterLimit } = this.props;

        if(event.target.textContent.length >= characterLimit) {
            if(event.code !== "Backspace" && event.code !== "Delete") {
                event.preventDefault();
            }
        }
    }

    /**
     * Checks to make sure the key entered is a valid input 
     * 
     * @param {Event} event - an event representing the user pressing down a key on the keyboard
     */
    onKeyDown(event) {
        this.stopNewLine(event);
        this.stopIfPastCharacterMax(event);
    }

    /**
     * Focuses the component
     */
    onFocus() {
        this.setState({
            focused: true
        })
    } 

    /**
     * Unfocuses the component
     */
    onBlur() {
        this.setState({
            focused: false
        })
    }

    /**
     * Ensures that pasted text gets inserted as plain text
     * @param {Event} event - an event representing the user pasting text into the input
     */
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

    /**
     * Renders the component on the page
     * @returns {Component} 
     */
    render() {
        const {placeholder, fontSize, icon} = this.props;
        const {value, placeholderShown, matchesPattern, focused} = this.state;

        //the width of the input is set to the text length of the value if it is longer than the length of the placeholder
        //this is so that the minimum length of the input is always the length of the placeholder
        let elementLength = value.length >= placeholder.length ? value.length : placeholder.length;

        return(
            <InputWrapper 
                    fontSize={fontSize}                      //the font size of the element
                    len={elementLength}                      //the width of the input text
                    focused={focused}                        //whether or not the element is focused
            >                       
                <Input
                    len={elementLength}                      //the width of the input text
                    role='textbox'                           //WAI-ARIA role stating that this object is a textbox
                    inputMode="text"                         //sets the keyboard mode of the input
                    contentEditable                          //makes the span editable
                    suppressContentEditableWarning="true"    //suppresses a warning about the content being editable
                    onInput={this.onInputChange}             //function to call when user types into input
                    onKeyDown={this.onKeyDown}               //function to call when user presses down a key
                    onFocus={this.onFocus}                   //function to call when user focuses on the input
                    onBlur={this.onBlur}                     //function to call when user unfocuses on the input
                    onPaste={this.onPaste}                   //function to call when user pastes text into the input
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

//default props, described at AutosizeInput constructor
AutosizeInput.defaultProps = {
    placeholder: '',
    fontSize: 1,
    initialValue: "",
    characterLimit: 500,
    pattern: /[\s\S]*/,
    icon: true
}

export default AutosizeInput;