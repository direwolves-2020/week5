import App from './app';

let app = new App();

let rock = document.getElementById('r');
rock.addEventListener('click', (e) => {
    app.handleUserInput('rock');
});

let paper = document.getElementById('p');
paper.addEventListener('click', (e) => {
    app.handleUserInput('paper');
});

let scissors = document.getElementById('s');
scissors.addEventListener('click', (e) => {
    app.handleUserInput('scissors');
});