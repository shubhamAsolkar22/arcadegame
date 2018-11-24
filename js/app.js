const MAX_ENEMY_SPEED = 300;

// Enemies our player must avoid
var Enemy = function (enemyRowIndex) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.rowIndex = enemyRowIndex;
    this.width = 60;
    this.height = 50;
    this.x = -90;
    this.y = 53 + enemyRowIndex * 83;
    this.speed = Math.floor(Math.random() * MAX_ENEMY_SPEED) + 10;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 505) {
        this.x = -90;
        this.speed = Math.floor(Math.random() * MAX_ENEMY_SPEED) + 10;
    }
    else {
        this.x = (this.x + this.speed * dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.width = 80;
        this.height = 50;
        this.x = 202;
        this.y = 404;
        this.sprite = 'images/char-boy.png';
    }

    update(dt) {

    }

    reCenter(){
        this.x = 202;
        this.y = 404;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input) {
        switch (input) {
            case 'left': this.x !== 0 ? this.x -= 101 : this.x;
                break;
            case 'right': this.x !== 404 ? this.x += 101 : this.x;
                break;
            case 'up': this.y !== -11 ? this.y -= 83 : this.y;
                break;
            case 'down': this.y !== 404 ? this.y += 83 : this.y;
                break;
        }

    }
}
const player = new Player();

let e10 = new Enemy(0);
let e11 = new Enemy(1);
let e12 = new Enemy(2);
let e00 = new Enemy(0);
let e01 = new Enemy(1);
let e02 = new Enemy(2);
let allEnemies = [e00, e01 , e02, e10, e11, e12 ];

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


/* const playAgain = document.querySelector('#play-again');
playAgain.addEventListener('click', function() {
    document.querySelector('#myModal').style.display = 'none';
    player.reCenter();
}); */