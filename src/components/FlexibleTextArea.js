import React from "react";
import styled from 'styled-components';

const TextArea = styled.textarea`
    font-family: monospace;
    font-size: ${props => props.fontSize}rem;
    resize: none;
    outline: none;
    overflow: hidden;
`;

class FlexibleTextArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        const { id, name, placeholder, fontSize, maxWidth} = this.props;
        return (
            <TextArea 
                fontSize={fontSize}
                maxWidth={maxWidth}

                id={id}
                name={name}
                placeholder={placeholder}
            />
        );
    }
}

FlexibleTextArea.defaultProps = {
    id: "flex-textarea",
    name: "flex-textarea",
    placeholder: "",

    fontSize: 1.75
}

export default FlexibleTextArea;