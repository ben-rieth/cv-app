import React from "react";
import AutosizeInput from "../../parts/AutosizeInput";
import ContactInput from "./../../parts/ContactInput";

import EmailIcon from './../../../images/email.svg';

class ContactSubsection extends React.Component {
    render() {
        return (
            <div className="subsection-form">
                <ContactInput iconPath={EmailIcon} example="example@email.com" canDelete={false}/>
            </div>
        )
    }
}

export default ContactSubsection;