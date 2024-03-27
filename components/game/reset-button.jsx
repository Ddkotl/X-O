export function ResetButton({ onClick }) {
	return (
		<button
			className='mt-2.5 cursor-pointer bg-transparent border border-gray-400 py-1 px-3 rounded '
			onClick={onClick}
		>
			Сбросить
		</button>
	)
}
