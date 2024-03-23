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
                    <h2 className="font-bold mb-2 text-2xl text-poppins">
                        {title}
                    </h2>
                    <p className="mb-2">{text}</p>
                    <a href={link} className="hover:text-orange underline">citeste mai mult 👉</a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;