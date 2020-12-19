import React, { useState, useEffect } from 'react'

const Navbar = (props) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-baseline'>
			<h1>Memory Game</h1>
			<p>This is a simple memory game. CLick on the cards, but done click on the same card twice!</p>
			<div className=''>
				<span className='nav-item'>Score: {props.score}</span>
				<span className='nav-item ml-3'>High Score: {props.highScore}</span>
			</div>
		</nav>
	)
}

export default Navbar
