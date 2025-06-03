# README

# Backlog

1. Game Board Creation phase:
   Game Board Creation...
   | |  
   -+-+-
   | |  
   -+-+-
   | |

Board Created.
The game will start with player X

2. layer X won with a vertical line
   Player X:
   X| |  
   -+-+-
   X|O|  
   -+-+-
   X| |O

PLAYER X WON!

3. Player O won with a horizontal line
   Player O:
   X| |X  
   -+-+-
   O|O|O
   -+-+-
   X| |

PLAYER O WON!

4. Player X won with a diagonal line
   Player X:
   X| |  
   -+-+-
   O|X|  
   -+-+-
   O| |X

PLAYER X WON!

5. The game ends with a draw
   Player X:
   X|O|X  
   -+-+-
   O|O|X
   -+-+-
   X|X|O

THE GAME ENDS WITH A DRAW!

# Customer’s desires:

The system should run in BOT mode (random BOT moves for players X & O), printing on the
screen all the player’s moves (with a 2-second timeout between each round) until someone wins
or the game ends with a draw.
