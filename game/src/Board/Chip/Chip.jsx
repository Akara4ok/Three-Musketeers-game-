import React from 'react';
import classes from './Chip.module.scss';
import {Draggable} from 'react-beautiful-dnd'

class Chip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div 
            onClick = {this.props.Available ? this.props.onAvailableChipClick : this.props.onChipClick}
            className = {`${classes.chip} ${
                this.props.ChipType ? classes.musketeer : classes.guardian
            }`}>
            <Draggable>
            { this.props.Available ? <div className = {classes.available}>&#10006;</div> : null}
            </Draggable>
            </div>
        );
    }
}

export default Chip;
