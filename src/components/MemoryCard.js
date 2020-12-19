import React from 'react'

const MemoryCard = (props) => {
	const agent = props.agent

	function handleClick() {
		props.handleClick(agent.key)
	}

	return (
		<div className='card m-2' style={{ width: '14rem' }} onClick={handleClick}>
			<img src={agent.imageURL} className='card-img-top' alt={agent.name} />
			<div className='card-body'>
				<h5 className='card-title'>{agent.name}</h5>
				<p className='card-text'>{agent.role}</p>
			</div>
		</div>
	)
}

export default MemoryCard
