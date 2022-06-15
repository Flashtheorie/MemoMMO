
btnPlay = document.querySelector('#play');
game = document.querySelector('#game');
gameboard = document.querySelector('#gameboard');
table = document.querySelector('#table')
gameboard.style.display = 'none';
let nbCoups = 0;
let nbPoints = 0;

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
    let choixParCoup = [];

        // Modification du background-image de chaque tile
        tiles.forEach(function(tile) {
            tile.addEventListener('click', function() {
                tile.classList.remove('turned');

                
                choixParCoup.push(tile.children[0].innerHTML);
               
                tile.children[0].style.display = 'block';
                nbCoups++;
                console.log(choixParCoup)
                if (nbCoups == 2)
            {
                
                

                setTimeout(function() {
                    if (choixParCoup[0] == choixParCoup[1]){
                       // Le joueur a trouvé une paire
                       // Select the divs which contains the same emoji as this one
                        nbPoints++;

                        console.log(nbPoints)

                        if (nbPoints == 8) {
                            alert('Vous avez gagné !');
                        }

                      let divs = document.querySelectorAll('.emoji');
                      console.log(divs)
                        divs.forEach(function(div) {
                            if (div.innerHTML == choixParCoup[0]) {
                                
                                div.parentElement.classList.add('found');
                            }
                        })

                       
                        
                    }
                   
                    choixParCoup = [];
                    let emojis = document.querySelectorAll('.emoji');
                    emojis.forEach(function(emoji){
                        //console.log(emoji)
                        emoji.parentElement.classList.add('turned');
                        emoji.style.display = 'none';
                    })
                    nbCoups = 0;
                }, 1000)
            }
            });
            
        }
        )





    



}








); // Onclick sur play








