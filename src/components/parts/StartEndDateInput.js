import React from "react";
import styled from "styled-components";
import DateInput from "./DateInput";

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & > .present {
        border-bottom: 2px solid lightgrey;
        font-size: .75rem;
        padding: 0 .75ch;
    }
`;

const PresentContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 2px;

    & > label {
        font-size: .75rem;
    }

    & > input {
        margin: 0 0 0 5px;
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
        const {allowPresent} = this.props;

        return (
            <DateContainer>
                <DateInput />
                <p>-</p>
                {isEndDatePresent ? 
                    <p className="present">Present</p> : <DateInput />}
                {allowPresent ? 
                    <PresentContainer>
                        <input type="checkbox" id="present-checkbox" onClick={this.onClick}/>
                        <label htmlFor="present-checkbox">Present?</label>
                    </PresentContainer> : <div></div>}
            </DateContainer>
        );
    }
}

StartEndDateInput.defaultProps = {
    allowPresent: true
}

export default StartEndDateInput;