type CardContainer = {
	cardClass?: string,
	children: any,
}
function CardContainer(data: CardContainer) {
	const { cardClass, children } = data;
	return (
		<div className={`${cardClass} bg-white rounded-lg shadow-lg`}>
			{children && <div className="mb-2">{children}</div>}
		</div>
	);
}

export default CardContainer;