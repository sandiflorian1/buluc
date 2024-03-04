export default function Paragraph ({ children, style }: any) {
	return (
		<div className="flex flex-col md:flex-row mx-auto py-8 md:py-8" style={style}>
			<div className="flex flex-col">
				{children}
			</div>
		</div>
	);
}
  