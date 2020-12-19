import './App.css'
import Navbar from './components/Navbar'
import GameInterface from './components/GameInterface'
import { useState } from 'react'

function App() {
	const [score, setScore] = useState(0)
	const [highScore, setHighScore] = useState(0)

	function continueGame(runnning) {
		// If game is not finished
		if (runnning) {
			// Add point after move
			setScore(score + 1)
		} else {
			// reset game and update high score
			if (score > highScore) {
				setHighScore(score)
			}
			setScore(0)
		}
	}

	return (
		<div className='container-fluid'>
			<Navbar score={score} highScore={highScore} />
			<GameInterface continueGame={continueGame} />
		</div>
	)
}

export default App
