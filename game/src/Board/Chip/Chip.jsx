import React from 'react';
import classes from './Chip.module.scss';
import {Draggable} from 'react-beautiful-dnd'

class Chip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getStyle(style, snapshot) {
        if (!snapshot.isDropAnimating) {
          return style;
        }
        return {
          ...style,
          transitionDuration: `0.001s`,
        };
      }

    render() {

        return (
            <Draggable key = {this.props.ChipId} draggableId={`${this.props.ChipId}`} index = {this.props.ChipId}>
            {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef} ref = {provided.innerRef}
                    onClick = {this.props.Available ? this.props.onAvailableChipClick : this.props.onChipClick}
                    className = {`${classes.chip} ${
                        this.props.ChipType ? classes.musketeer : classes.guardian
                    }`}
                    style={this.getStyle(provided.draggableProps.style, snapshot)}>
                        {this.props.Available ? <div className = {classes.available}>&#10006;</div> : null}
                 </div>)}
            </Draggable>
        );
    }
}

export default Chip;
