function blocGame() {
    var canvas = document.getElementById("game");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "white";
};

blocGame.prototype.draw = function()
{
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);
};

blocGame.prototype.update = function()
{
    if (this.paused)
        return;
};

// Initialize our game instance
var game = new blocGame();

function mainLoop() {
    game.update();
    game.draw();
    // Call the main loop again at a frame rate of 30fps
    setTimeout(mainLoop, 33.3333);
}

// Start the game execution
mainLoop();
 

/*
 
for (var x = 0.5; x < 500; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 375);
}

for (var y = 0.5; y < 375; y += 10) {
  context.moveTo(0, y);
  context.lineTo(500, y);
}*/