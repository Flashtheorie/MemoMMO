
btnPlay = document.querySelector('#play');
game = document.querySelector('#game');
gameboard = document.querySelector('#gameboard');
table = document.querySelector('#table')
gameboard.style.display = 'none';
let coups = 0;


btnPlay.addEventListener('click', function() {
    
    game.innerHTML = ''; // clear the game container
    table.innerHTML = ''; // clear the table container
    gameboard.style.display = 'block';
    fruits = [
        '🍋', 
        '🍋', 
        '🍒',
        '🍒',
        '🍌',
        '🍌',
        '🍉',
        '🍉',
        '🍓',
        '🍓',
        '🍐',
        '🍐',
        '🍈',
        '🍈',
        '🍇',
        '🍇'
            ];

            
    let shuffledArray = fruits.sort((a, b) => 0.5 - Math.random());
    let indexfruits = 0;
    tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (let i = 0; i < 4; i++) {

        tr = document.createElement('tr');
    tbody.append(tr);

    
    for (let i = 0; i < 4; i++) {
        let card = document.createElement('th');
        let div = document.createElement('div');
        div.setAttribute('class', 'emoji')
        tr.append(card);
        card.append(div);
        
        div.innerHTML = shuffledArray[indexfruits];
        card.classList.add('tiles');
       // card.classList.add('turned');
        indexfruits++;
        
        setTimeout(function(){
       
            tiles = document.querySelectorAll('th');
            //console.table(tiles)
    
            // Modification du background-image de chaque tile
            tiles.forEach(function(tile) {
                tile.classList.remove('tiles')
                div.style.display = "none";
                tile.classList.add('turned');
                
                //tile.innerHTML = ''
                //tile.style.backgroundImage = `url('assets/potato-6.png')`;
            }
            )
    
           
        }, 1000);
}

    }


    tiles = document.querySelectorAll('th');
        //console.table(tiles)

        // Modification du background-image de chaque tile
        tiles.forEach(function(tile) {
            tile.addEventListener('click', function() {
                tile.classList.remove('turned');
                tile.children[0].style.display = 'block';
                coups++;
                if (coups == 2)
            {
                setTimeout(function() {
                    let emojis = document.querySelectorAll('.emoji');
                    emojis.forEach(function(emoji){
                        console.log(emoji)
                        emoji.parentElement.classList.add('turned');
                        emoji.style.display = 'none';
                    })
                    coups = 0;
                }, 1000)
            }
            });
            
        }
        )





    



}








); // Onclick sur play








