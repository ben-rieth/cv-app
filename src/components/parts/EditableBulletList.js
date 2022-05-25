import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import AddAnotherButton from "./AddAnotherButton";
import AutosizeInput from "./AutosizeInput";

const BulletList = styled.ul`
    list-style-type: square;
    margin: 0 20px;
    & > li::marker {
        color: rgba(0, 0, 0, 0.5);
    }
`;

class EditableBulletList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bullets: [
                {
                    id: uniqid()
                }
            ]
        }

        this.addBullet = this.addBullet.bind(this);
        this.deleteBullet = this.deleteBullet.bind(this);
    }

    addBullet() {
        this.setState({
            bullets: this.state.bullets.concat(
                {
                    id: uniqid()
                }
            )
        })
    }

    deleteBullet(bulletToDelete) {
        this.setState({
            bullets: this.state.bullets.filter(bullet => bullet.id !== bulletToDelete)
        })
    }

    render () {
        const {fontSize, placeholder} = this.props;
        const {bullets} = this.state;

        return (
            <BulletList>
                {bullets.map((bullet) => {
                    return (
                        <li key={bullet.id}>
                            <AutosizeInput 
                                placeholder={placeholder}
                                fontSize={fontSize} 
                                allowMultipleLines={true} 
                                icon="delete" 
                                onIconClick={() => this.deleteBullet(bullet.id)}/>
                        </li>)
                })}
                <AddAnotherButton 
                    name="Bullet" 
                    fontSize={fontSize} 
                    onClick={this.addBullet}/>
            </BulletList>
        );
    }
}

export default EditableBulletList;