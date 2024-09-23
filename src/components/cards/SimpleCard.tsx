type SimpleCard = {
    title?: string,
    cardClass?: string,
    children: any,
}
function SimpleCard(data:SimpleCard) {
    const { title, cardClass, children } = data;
    return (
        <div className={`${cardClass} bg-white rounded-lg shadow-lg`}>
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-poppins">
                    {title}
                </h2>
                {children && <p className="mb-2">{children}</p>}
            </div>
        </div>
    );
}

export default SimpleCard;