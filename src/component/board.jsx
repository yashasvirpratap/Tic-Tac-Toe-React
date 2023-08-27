import React from 'react'
import {Link} from 'react-router-dom'
import {findWinner, isBoxesFilled} from './function'
import Box from './board-box'
import {Storage} from '../storage/storage'
import  '../css/board.css'
import '../css/buttons.css'

export class BoardComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            BoxArray:Array(9).fill(null),
            history:[],
            IsNext:false
        }
    }

    storage=new Storage()

    handleOnClick = (index) =>{
        var boxes=this.state.BoxArray.slice()
        let history=this.state.history

        if(findWinner(boxes) || boxes[index]){
            return
        }

        if(isBoxesFilled(boxes) === true){
            return
        }

        boxes[index] = this.state.isNext ? 'x' : 'o';

        history.push(boxes[index]);

        this.setState({
            BoxArray:boxes,
            history:history,
            isNext: !this.state.isNext,
        })
    }


    handleRestart=() =>{
        this.setState({
            BoxArray:Array(9).fill(null),
            history:[],
            IsNext:true,
        })
    }

    render(){
        let winner=findWinner(this.state.BoxArray)
        let isFilled=isBoxesFilled(this.state.BoxArray)
        let status
        if(winner){
            status=`The winner is ${winner}`
            this.storage.update(`${winner} won`)
        }else if(!winner && isFilled){
            status="Game drawn!"
            this.storage.update("Game drawn")
        }else{
            status=`It's ${(this.state.isNext ? 'x' : 'o' )}'s turn`
        }
        return(
            <div className="boardPage">
                <Link to="/" className="LinkButton">Go back to Dashboard</Link>
                <div className="BoardWrapper">
                    <div className="Board">
                        <h1 className="BoardHeading">{status}</h1>
                        <div className="BoardRow">
                            <Box value={this.state.BoxArray[0]} onClick = {()=>this.handleOnClick(0)} />
                            <Box value={this.state.BoxArray[1]} onClick = {()=>this.handleOnClick(1)} />
                            <Box value={this.state.BoxArray[2]} onClick = {()=>this.handleOnClick(2)} />
                        </div>
                        <div className="BoardRow">
                            <Box value={this.state.BoxArray[3]} onClick = {()=>this.handleOnClick(3)} />
                            <Box value={this.state.BoxArray[4]} onClick = {()=>this.handleOnClick(4)} />
                            <Box value={this.state.BoxArray[5]} onClick = {()=>this.handleOnClick(5)} />
                        </div>
                        <div className="BoardRow">
                            <Box value={this.state.BoxArray[6]} onClick = {()=>this.handleOnClick(6)} />
                            <Box value={this.state.BoxArray[7]} onClick = {()=>this.handleOnClick(7)} />
                            <Box value={this.state.BoxArray[8]} onClick = {()=>this.handleOnClick(8)} />
                        </div>
                    </div>
                    <div className="HistoryContainer">
                        <ul className="HistoryList">
                            {this.state.history.length === 0 && <span>No moves to show</span>}

                            {this.state.history.length !==0 && this.state.history.map((value,index) => {
                                return <li key={index}>Move {index+1}: <strong>{value}</strong></li>
                            })}
                        </ul>
                    </div>
                    {(winner || isFilled) && <div className="BoardFooter"><button className="btn" onClick={this.handleRestart}>Restart Game</button></div>}
                </div>
            </div>
        )
    }
}
