const high = document.getElementById('highScoresList');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

high.innerHTML = highScores.map( score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');


/*highScores.forEach( element => {
    let output = '';

    output +=
        `<div>
            <ul>
                <li>${element.name}</li>
                <li>${element.score}</li>

            
            </ul>
    

        </div>`

    high.innerHTML = output;
});*/