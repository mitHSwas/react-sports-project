import React from 'react';
import './Players.css';

const Players = (props) => {
    const {name, image, salary, position, email, phone} = props.player;
    
    return (
        <div>
            <div className="players">
                <img className="player-img" src={image} alt="" />
                <h3>Name: {name}</h3>
                <p>Position: {position}</p>
                <p>Market Value: {salary}</p>
                <p>Phone-no:{phone}</p>
                <p>Email: {email}</p>
                <button onClick={() => props.handelAddSelected(props.player)}>Selected</button>
            </div>    
         </div>
    );
};

export default Players;