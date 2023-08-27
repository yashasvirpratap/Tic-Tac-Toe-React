import React from 'react'
import {Link} from 'react-router-dom'
import {Storage} from './../storage/storage'
import "./../css/buttons.css"
import "../css/scoreboard.css"

export class Scoreboard extends React.Component{
    state={
        scoreboard: []
    }

    async componentDidMount(){
        let storage = await new Storage().getData()
        this.setState({
            scoreboard:storage
        })
    }

    render(){
        return(
            <div className="scoreboardContent">
                <h1 className="heading">Tic-Tac-Toe</h1>
                <Link to="/board">
                    <button className="btn" id="btnId">Start new game</button>
                </Link>
                <h1>Recent game:</h1>
                {this.state.scoreboard ==="Game drawn" && <h3>Last match was draw.</h3>}
                {this.state.scoreboard !=="Game drawn" && <h3>{this.state.scoreboard} the last match.</h3>}
            </div>
        )
    }
}