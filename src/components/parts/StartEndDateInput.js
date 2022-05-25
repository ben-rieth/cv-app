import React from "react";
import styled from "styled-components";
import DateInput from "./DateInput";

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & > input {
        margin: 0 0 0 10px;
    }

    & > label, & > p {
        font-size: .75rem;
    }

    & > .present {
        border-bottom: 2px solid lightgrey;
    }
`;

class StartEndDateInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEndDatePresent: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isEndDatePresent: !this.state.isEndDatePresent
        });
    }

    render() {
        const {isEndDatePresent} = this.state;

        return (
            <DateContainer>
                <DateInput />
                <p>-</p>
                {isEndDatePresent ? 
                    <p className="present">Present</p> : <DateInput />}

                <input type="checkbox" id="present-checkbox" onClick={this.onClick}/>
                <label for="present-checkbox">Present?</label>
            </DateContainer>
        );
    }
}

export default StartEndDateInput;