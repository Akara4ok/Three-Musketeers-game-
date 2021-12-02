import React from 'react';
import classes from './Cell.module.scss';
import Chip from '../Chip/Chip';
import {Droppable} from 'react-beautiful-dnd'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {Clicked} = this.state;
        return (
            <div className = {`${classes.cell} ${
                this.props.Clicked ? classes.clicked : null
            }`}
            onClick = {this.props.Available && !this.props.IsChip ? this.props.onAvailableChipClick : null}
            >
                <Droppable>
                {(provided) => (
                    this.props.IsChip ? <Chip onChipClick={this.props.onChipClick} onAvailableChipClick = {this.props.onAvailableChipClick} ChipType = {this.props.ChipType} Available = {this.props.Available}/> : null,
                    this.props.Available && !this.props.IsChip ? <div className = {classes.emptyAvailable}></div> : null)
                }
                </Droppable>
            </div>
        );
    }
}

export default Cell;