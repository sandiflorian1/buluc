import { Link } from 'react-router-dom';

type BlogCard = {
    imgURL: string,
    text: string,
    title: string,
    cardClass: string,
    link: string,
}
function BlogCard({ data }: { data: BlogCard }) {
    const { imgURL, text, title, cardClass, link } = data;
    return (
        <div className={`${cardClass}`}>
            <div className={`bg-white rounded-lg shadow-lg h-full`}>
                <img src={imgURL} alt="" className="rounded-t-lg w-full" style={{ height: '200px', objectFit: 'cover' }}/>
                <div className="p-6">
                    <h3 className="font-bold mb-2">
                        {title}
                    </h3>
                    <p className="mb-2">{text}</p>
                    <Link to={link} className="hover:text-orange underline">
                        citeste mai mult 👉
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;