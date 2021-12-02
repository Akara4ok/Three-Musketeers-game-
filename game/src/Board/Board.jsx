import React from 'react';
import classes from './Board.module.scss';
import Chip from './Chip/Chip';
import Cell from './Cell/Cell'
import {DragDropContext} from 'react-beautiful-dnd'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 5,
            cells: [],
            lastI: -1,
            lastJ: -1
        };
        this.makeBoard();
    }

    makeBoard(){
        const{ cells, size } = this.state;
        for (let i = 0; i < size; i++){
            cells.push([]);
        }
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                cells[i].push({Clicked: false, IsChip: true, Available: false, Type: 0})
            }
        }
        cells[Math.floor(size/2)][Math.floor(size/2)].Type = 1;
        cells[size - 1][0].Type = 1;
        cells[0][size - 1].Type = 1;
        this.setState({cells});
    }
    
    onChipClick(i, j){
        const {cells, size} = this.state;
        let{lastI, lastJ} = this.state;
        cells[i][j].Clicked = true;

        this.onFocus(lastI, lastJ, i, j);

        if(i)
        {
            if (cells[i][j].Type === 0 && !cells[i - 1][j].IsChip)
                cells[i - 1][j].Available = true;

            if (cells[i][j].Type === 1 && cells[i - 1][j].IsChip && cells[i - 1][j].Type !== 1)
                cells[i - 1][j].Available = true;
        }
        if(j)
        {
            if (cells[i][j].Type === 0 && !cells[i][j - 1].IsChip)
                cells[i][j - 1].Available = true;

            if (cells[i][j].Type === 1 && cells[i][j - 1].IsChip && cells[i][j - 1].Type !== 1)
                cells[i][j - 1].Available = true;
        }
        if(i !== size - 1)
        {
            if (cells[i][j].Type === 0 && !cells[i + 1][j].IsChip)
                cells[i + 1][j].Available = true;

            if (cells[i][j].Type === 1 && cells[i + 1][j].IsChip && cells[i + 1][j].Type !== 1)
                cells[i + 1][j].Available = true;
        }
        if(j !== size - 1)
        {
            if (cells[i][j].Type === 0 && !cells[i][j + 1].IsChip)
                cells[i][j + 1].Available = true;

            if (cells[i][j].Type === 1 && cells[i][j + 1].IsChip && cells[i][j + 1].Type !== 1)
                cells[i][j + 1].Available = true;
        }

        lastI = i;
        lastJ = j;
        this.setState({cells, lastI, lastJ});
    }

    onFocus(lastI, lastJ, i, j){
        const{size, cells} = this.state;
        if (lastI != -1 && (lastI !== i || lastJ !== j))
        {
            if(lastI)
            {
                cells[lastI - 1][lastJ].Available = false;
            }
            if(lastJ)
            {
                cells[lastI][lastJ - 1].Available = false;
            }
                if(lastI !== size - 1)
            {
                cells[lastI + 1][lastJ].Available = false;
            }
            if(lastJ !== size - 1)
            {
                cells[lastI][lastJ + 1].Available = false;
            }
            cells[lastI][lastJ].Clicked = false;
        }
    }

    onAvailableChipClick(i, j){
        let{lastI, lastJ} = this.state;
        const {cells, size} = this.state;
        this.onFocus(lastI, lastJ, i, j)
        cells[lastI][lastJ].IsChip = 0;
        cells[i][j].IsChip = 1;
        cells[i][j].Type = cells[lastI][lastJ].Type;
        lastI = -1;
        lastJ = -1;
        this.setState({cells, lastI, lastJ});
    }

    render() {
        const{ cells, size } = this.state;
        return (
            <div className = {classes.container}>
                <DragDropContext>
                {cells.map((element, i) => (element.map((element, j) => (<Cell onChipClick={() => this.onChipClick(i, j)} onAvailableChipClick = {() => this.onAvailableChipClick(i, j)} ChipType = {element.Type} IsChip = {element.IsChip} Clicked = {element.Clicked} Available = {element.Available} ChipId = {i* size + j} />))))}
                </DragDropContext>
            </div>
        );
    }
}

export default Board;
