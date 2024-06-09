## Simon Game: Test Your Memory!

Simon Game is an engaging and fun memory game where players must follow an increasingly long sequence of lights and sounds. Each round, a new light is added to the sequence, and the player must remember and repeat the sequence correctly to advance to the next round. The game is a great way to challenge and improve your memory skills!

## Technologies Utilized
- **React**: Used for building the user interface components and managing the application's state.
- **Tailwind CSS**: A utility-first CSS framework used for quickly styling components and layouts.
- **JavaScript (ES6+)**: Implements the game's logic, functionality, and interactivity.

## Key Features

#### 1. Interactive Gameplay
The Simon Game provides an interactive and immersive experience where players must follow a sequence of lights and sounds. Each round introduces a new light, increasing the challenge and fun.

#### 2. Visual and Audio Feedback
The game uses both visual (lights) and audio (sounds) feedback to guide players. Each button in the game lights up and plays a unique sound, making it easier to remember the sequence.

#### 3. Level Tracking
The game tracks the player's progress by counting the number of rounds completed. This score is displayed to motivate players to beat their previous high scores.


## How to Play

1. **Start the Game**: Press the start button to begin a new game.
2. **Watch the Sequence**: The game will light up a sequence of buttons with corresponding sounds. Watch and listen carefully!
3. **Repeat the Sequence**: After the sequence is shown, it's your turn to repeat it by clicking the buttons in the same order.
4. **Progress to Next Round**: If you successfully repeat the sequence, a new light will be added, and you can continue to the next round.
5. **Game Over**: If you make a mistake, the game will end, and you can try again to beat your previous score.


## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**


2. **Navigate to the project directory:**

   ```sh
   cd simon-game
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## Project Structure

The project's structure is organized as follows:

```
simon-game/
│   
├── src/
│   ├── assets/
│   │   ├── blue.mp3
│   │   ├── red.mp3
│   │   ├── green.mp3
│   │   ├── yellow.mp3
│   │   └── wrong.mp3
│   │
│   ├── components/
│   │   ├── Buttons.js
│   │   └── PlayAudio.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Components

### `Buttons.js`

The `Buttons` component renders a button with a specific color and plays the corresponding sound when clicked.

### `PlayAudio.js`

The `PlayAudio` component handles playing audio files. It uses a `ref` to manage the audio element and ensures that the audio plays each time the source changes.

### `App.js`

The main component that manages the state and logic of the Simon game, including the game pattern, user input, level, and audio playback.






















