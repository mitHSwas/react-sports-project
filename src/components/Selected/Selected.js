import React from 'react';

const Selected = (props) => {
    const selected = props.selected;
    let totalBudget = 0;
    let selectedPlayers = [];
    for (let i = 0; i < selected.length; i++) {
        const player = selected[i];
        totalBudget = totalBudget + player.salary;
        selectedPlayers = selectedPlayers+ "," + player.name;
    }
    return (
        <div className="selected">
            <h1>Selected Players: {selected.length}</h1>
            <h4>Today play: {selectedPlayers}</h4>
            <p>Our total cost: ${(totalBudget).toFixed(2)}K</p>
        </div>
    );
};

export default Selected;