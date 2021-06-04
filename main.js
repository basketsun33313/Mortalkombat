'use strict';

const playerFirst = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fireBall', 'chains', 'teleportationSkill'],
    attack: function () {
        console.log(`${playerFirst.name}` + 'fight');
    }, 
};

const playerSecond = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['iceBlast', 'iseAxe', 'iseRink'],
    attack: function () {
        console.log(`${playerSecond.name}` + 'fight');
    }, 
};

const arena = document.querySelector('.arenas');

const createPlayer =  (player1, name, life, img) => {
    const playerOne = document.createElement('div');
    playerOne.classList.add(player1);
    arena.appendChild(playerOne);
    const progressBar = playerOne.createElement('div');
    progressBar.classList.add('progressbar');
    playerOne.appendChild('progressBar');
    const character = playerOne.createElement('div');
    character.classList.add('character');
    player1.appendChild('character');
    const playerlife = progressBar.createElement('div');
    playerlife.classList.add('life');
    progressBar.appendChild('life');
    playerlife.style.width = `${life}%`;
    const playerName = progressBar.createElement('div');
    playerName.classList.add('name');
    progressBar.appendChild('name');
    playerName.innerText = `${playerFirst.name}`;
    const image = character.createElement('img');
    character.appendChild('image');
    image.src = playerOne.img;    
};

createPlayer(player1, 'SCORPION', 50, playerFirst.img);
createPlayer(player2, 'SUB-ZERO', 80, playerSecond.img);

