import styles from './index.module.css'

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

export default function HomePage() {
	const sells = [
		SYMBOL_O,
		null,
		SYMBOL_X,
		null,
		null,
		SYMBOL_X,
		SYMBOL_O,
		SYMBOL_O,
		SYMBOL_O,
	]
	const currentStep = SYMBOL_X
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

	return (
		<div className={styles['game']}>
			<div className={styles['game-info']}>
				Ход: {renderSymbol(currentStep)}
			</div>
			<div className={styles['game-field']}>
				{sells.map((symbol, index) => {
					return (
						<button key={index} className={`${styles['cell']}`}>
							{symbol ? renderSymbol(symbol) : null}
						</button>
					)
				})}
			</div>
		</div>
	)
}
