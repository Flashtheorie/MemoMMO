<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MemoMMO</title>
    <link rel="stylesheet" href="assets/style.css" />
  </head>

  <body>
    <div id="game">
      <div id="secondTitle">The first RPG Memory Game</div>
      <div id="title" class="noselect">
        <h1>MEMOMMO</h1>
      </div>

      <div id="buttonPlay" align="center">
        <button class="btn" id="play">PLAY</button>
      </div>
    </div>

    <div id="gameboard" align="center">
      <h1>0/100 xp</h1>
      <div id="xpbar"></div>

      <table id="table"></table>
      <div id="timer"></div>
    </div>
    <script type="text/javascript" src="scripts/app.js"></script>
  </body>
</html>
