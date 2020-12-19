import React from 'react'
import MemoryCard from './MemoryCard'
import { useState } from 'react'

const GameInterface = (props) => {
	const [agents, setAgents] = useState({
		breach: {
			name: 'Breach',
			role: 'INITIATOR',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-breach-card-avatar.png',
			key: 'breach'
		},
		brimstone: {
			name: 'Brimstone',
			role: 'CONTROLLER',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-brimstone-card-avatar.png',
			key: 'brimstone'
		},
		cypher: {
			name: 'Cypher',
			role: 'SENTINEL',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-cypher-card-avatar.png',
			key: 'cypher'
		},
		jett: {
			name: 'Jett',
			role: 'DUELIST',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-jett-card-avatar.png',
			key: 'jett'
		},
		omen: {
			name: 'Omen',
			role: 'CONTROLLER',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-omen-card-avatar.png',
			key: 'omen'
		},
		phoenix: {
			name: 'Phoenix',
			role: 'DUELIST',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-phoenix-card-avatar.png',
			key: 'phoenix'
		},
		sage: {
			name: 'Sage',
			role: 'SENTINEL',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-sage-card-avatar.png',
			key: 'sage'
		},
		sova: {
			name: 'Sova',
			role: 'INITIATOR',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-sova-card-avatar.png',
			key: 'sova'
		},
		viper: {
			name: 'Viper',
			role: 'CONTROLLER',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-viper-card-avatar.png',
			key: 'viper'
		},
		raze: {
			name: 'Raze',
			role: 'DUELIST',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-raze-card-avatar.png',
			key: 'raze'
		},
		reyna: {
			name: 'Reyna',
			role: 'DUELIST',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-reyna-card-avatar.png',
			key: 'reyna'
		},
		killjoy: {
			name: 'Killjoy',
			role: 'SENTINEL',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-killjoy-card-avatar.png',
			key: 'killjoy'
		},
		skye: {
			name: 'Skye',
			role: 'INITIATOR',
			imageURL: 'https://vgraphs.com/images/players/cards/valorant-player-valorant-skye-card-avatar.png',
			key: 'skye'
		}
	})

	const [displayOrder, setDisplayOrder] = useState(shuffledArray())

	const [alreadySelectedAgents, setAlreadySelectedAgents] = useState([])

	function shuffledArray() {
		let array = Object.keys(agents)
		let currentIndex = array.length,
			temporaryValue,
			randomIndex

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex -= 1

			// Swap it with current element
			temporaryValue = array[currentIndex]
			array[currentIndex] = array[randomIndex]
			array[randomIndex] = temporaryValue
		}

		return array
	}

	function handleClick(key) {
		// Agent has not yet been picked
		if (!alreadySelectedAgents.includes(key)) {
			props.continueGame(true)
			setAlreadySelectedAgents(alreadySelectedAgents.concat(key)) // Add selected agent
			setDisplayOrder(shuffledArray()) // Refresh the display
		} else if (alreadySelectedAgents.includes(key)) {
			// Reset Game
			props.continueGame(false) // Reset score
			setAlreadySelectedAgents([])
			setDisplayOrder(shuffledArray()) // Refresh Display
		}
	}

	return (
		<div className='container-fluid d-flex justify-content-between align-items-center flex-wrap'>
			{displayOrder.map((key, index) => {
				return <MemoryCard agent={agents[key]} key={index} handleClick={handleClick} />
			})}
		</div>
	)
}

export default GameInterface
