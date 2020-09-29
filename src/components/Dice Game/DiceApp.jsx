import React, { useState } from 'react';
import './DiceStyles.css';
import dice1 from '../../imgs/dice1.png';
import dice2 from '../../imgs/dice2.png';
import dice3 from '../../imgs/dice3.png';
import dice4 from '../../imgs/dice4.png';
import dice5 from '../../imgs/dice5.png';
import dice6 from '../../imgs/dice6.png';
import GlobalHeading from '../GlobalHeading';

function DiceApp() {
    const [playerOne, setPlayerOne] = useState(dice1);
    const [playerTwo, setPlayerTwo] = useState(dice1);
    const [winner, setWinner] = useState("Roll the Dice");
        
    function rollDice() {
        let diceOne = Math.floor(((Math.random() * 6) + 1));
        let diceTwo = Math.floor(((Math.random() * 6) + 1));
        

        switch (diceTwo) {
            case 1:
                setPlayerTwo(dice1);
            break;
            case 2:
                setPlayerTwo(dice2);
                break;
            case 3:
                setPlayerTwo(dice3);
                break;
            case 4:
                setPlayerTwo(dice4);
                break;
            case 5:
                setPlayerTwo(dice5);
                break;
            case 6:
                setPlayerTwo(dice6);
                break;
            default:
                break;
            }
        switch (diceOne) {
            case 1:
                setPlayerOne(dice1);
            break;
            case 2:
                setPlayerOne(dice2);
                break;
            case 3:
                setPlayerOne(dice3);
                break;
            case 4:
                setPlayerOne(dice4);
                break;
            case 5:
                setPlayerOne(dice5);
                break;
            case 6:
                setPlayerOne(dice6);
                break;
            default:
                break;
            }
        diceOne > diceTwo ? setWinner("Player One Won!") : setWinner("Player Two Won!");
    }

    return (
    <div className="dice-app-body">
        <GlobalHeading/>

        <div className="dice-container">
            <h1 id="dice-main-heading">{winner}</h1>
            <button onClick={rollDice} className="dice-btn">Roll the dice</button>
            <div className="players" >
                <h2 className="player-names">Player 1</h2>
                <img src={playerOne} alt="Dice-1-IMG"/>
            </div>

            <div className="players">
                <h2 className="player-names">Player 2</h2>
                <img src={playerTwo} alt="Dice-1-IMG"/>
            </div>
        </div>
    </div>
    )
}


export default DiceApp;