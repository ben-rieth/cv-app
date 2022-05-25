import React from "react";
import AutosizeInput from "../../parts/AutosizeInput";
import StartEndDateInput from "../../parts/StartEndDateInput";

class PositionSubSection extends React.Component {

    render() {
        return(
            <div className="subsection-form">
                <AutosizeInput placeholder="Position/Title" fontSize={1.2} />
                <div className="row" >
                    <AutosizeInput placeholder="Company Name" fontSize={.8}/>
                    <p>·</p>
                    <AutosizeInput placeholder="Location" fontSize={.8}/>
                </div>
                <StartEndDateInput />
            </div>
        );
    }
}

export default PositionSubSection;