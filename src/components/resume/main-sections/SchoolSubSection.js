import React from "react";
import AutosizeInput from "../../parts/AutosizeInput";
import StartEndDateInput from "../../parts/StartEndDateInput";
import SubSection from "./SubSection";

class SchoolSubSection extends React.Component {
    render() {
        return (
            <SubSection
                form={
                    <div className="subsection-form">
                        <AutosizeInput placeholder="Degree Name" fontSize={1.2}/>
                        <AutosizeInput placeholder="School Name" fontSize={1}/>
                        <StartEndDateInput key={3}/>
                    </div>
                }
            />
        );
    }
}

export default SchoolSubSection;