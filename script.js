fetch('data.json')
    .then(res => res.json())
    .then(scores => {
      const scoreBoard = document.getElementById('score-board');
      scores.forEach((item) => {
        const scoreItem = document.createElement('div');
        scoreItem.classList.add('s-items', `bg${scores.indexOf(item) + 1}`);
        scoreItem.innerHTML = `
          <div class="category">
            <img src="${item.icon}" alt="${item.category}">
            ${item.category} 
          </div>
          <div class="score">
            <span>${item.score}</span>
            /100
          </div>
        `;
        scoreBoard.appendChild(scoreItem);
      });
    });