import { useState } from 'react'
import styles from './index.module.css'

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

const computeWinner = sells => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (sells[a] && sells[a] === sells[b] && sells[a] === sells[c]) {
			return [a, b, c]
		}
	}
}

export default function HomePage() {
	const [sells, setSells] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [currentStep, setCurrentStep] = useState(SYMBOL_O)
	const [winnerSequense, setWinnerSequense] = useState()

	const getSymbolClassName = symbol => {
		if (symbol === SYMBOL_O) {
			return `${styles['symbol--o']}`
		}
		if (symbol === SYMBOL_X) {
			return `${styles['symbol--x']}`
		}
		return ''
	}

	const renderSymbol = symbol => {
		return (
			<span className={`${getSymbolClassName(symbol)} ${styles['symbol']}`}>
				{symbol}
			</span>
		)
	}

	const handleCellClick = index => {
		if (sells[index]) {
			return
		}
		const sellsCopy = sells.slice()
		sellsCopy[index] = currentStep
		const winner = computeWinner(sellsCopy)
		setSells(sellsCopy)
		setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
		setWinnerSequense(winner)
	}

	return (
		<div className={styles['game']}>
			<div className={styles['game-info']}>
				Ход: {renderSymbol(currentStep)}
			</div>
			<div className={styles['game-field']}>
				{sells.map((symbol, index) => {
					const isWinner = winnerSequense?.includes(index)
					return (
						<button
							key={index}
							className={`${styles['cell']} ${
								isWinner ? styles['cell--win'] : ''
							}`}
							onClick={() => handleCellClick(index)}
						>
							{symbol ? renderSymbol(symbol) : null}
						</button>
					)
				})}
			</div>
		</div>
	)
}
