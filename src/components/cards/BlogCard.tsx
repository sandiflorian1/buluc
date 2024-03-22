type BlogCard = {
    imgURL: string,
    text: string,
    title: string,
    cardClass: string,
    link?: string,
}
function BlogCard({ data }: { data: BlogCard }) {
    const { imgURL, text, title, cardClass, link } = data;
    return (
        <div className={`bg-white ${cardClass}`}>
            <div className={`rounded-lg shadow-lg m-4`}>
                <img src={imgURL} alt="" className="rounded-t-lg w-full" style={{ height: '200px', objectFit: 'cover' }}/>
                <div className="p-6">
                    <h2 className="font-bold mb-2 text-2xl text-purple-800">
                        {title}
                    </h2>
                    <p className="text-purple-700 mb-2">{text}</p>
                    <a href={link} className="text-purple-600 hover:text-purple-500 underline text-sm">citeste mai mult 👉</a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;