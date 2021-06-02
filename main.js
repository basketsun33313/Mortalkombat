'use strict';

const playerFirst = {
    name: 'Scorpion',
    hp: 100,
    img: '',
    weapon: ['fireBall', 'chains', 'teleportationSkill'],
    attack: function () {
        console.log(`${playerFirst}.name` + 'fight');
    }, 
};

const playerSecond = {
    name: 'Subzero',
    hp: 100,
    img: '',
    weapon: ['iceBlast', 'iseAxe', 'iseRink'],
    attack: function () {
        console.log(`${playerSecond}.name` + 'fight');
    }, 
};

const arena = document.querySelector('.arenas');

const createPlayer =  (player1, name, life) => {
    let player1 = document.createElement('div');
    player1.classList.add('player1');
    arena.appendChild('player1');
    let progressBar = player1.createElement('div');
    progressBar.classList.add('.progressbar');
    player1.appendChild('progressBar');
    let character = player1.createElement('div');
    character.classList.add('character');
    player1.appendChild('character');
    let life = progressBar.createElement('div');
    life.classList.add('life');
    progressBar.appendChild('life');
    life.style.width = '100%';
    let name = progressBar.createElement('div');
    name.classList.add('name');
    progressBar.appendChild('name');
    name.innerText = `${playerFirst}.name`;
    let image = character.createElement('img');
    character.appendChild('image');
    image.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
};

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);

