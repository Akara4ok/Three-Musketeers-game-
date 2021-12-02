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
            <Droppable droppableId={`${this.props.ChipId}` }>
                {(provided) => (
                    <div {...provided.droppableProps} ref = {provided.innerRef}
                    className = {`${classes.cell} ${
                        this.props.Clicked ? classes.clicked : null
                    }`}
                    onClick = {this.props.Available && !this.props.IsChip ? this.props.onAvailableChipClick : null}
                    >
                        {this.props.IsChip ? <Chip onChipClick={this.props.onChipClick} onAvailableChipClick = {this.props.onAvailableChipClick} ChipType = {this.props.ChipType} Available = {this.props.Available} ChipId = {this.props.ChipId}/> : null}
                        {(this.props.Available && !this.props.IsChip) ? <div className = {classes.emptyAvailable}></div> : null}
                    </div>
                    )
                }
                </Droppable>
        );
    }
}

export default Cell;