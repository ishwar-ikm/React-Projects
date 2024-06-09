# Simon Game

This is a React implementation of the classic Simon game. The game plays a series of tones and flashes, and the player must repeat the sequence in the correct order to advance to the next level.


## Features

- Interactive gameplay with dynamic audio feedback.
- Responsive design.
- Progressive difficulty with increasing sequence length.
- Visual and audio feedback for user actions and game events.

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
