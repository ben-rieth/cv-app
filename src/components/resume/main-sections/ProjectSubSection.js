import React from "react";
import AutosizeInput from "../../parts/AutosizeInput";

class ProjectSubSection extends React.Component {
    render() {
        return (
            <div className="subsection-form">
                <AutosizeInput placeholder="Project Name" fontSize={1.2} />
            </div>
        )
    }
}

export default ProjectSubSection;