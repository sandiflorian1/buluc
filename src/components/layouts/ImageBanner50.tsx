function BlogCard(children) {
    return (
        <div className="w-full">
            <div className="w-[50%] mb:w-full">
                <p>{children}</p>
            </div>

            <div className="w-[50%] mb:w-full">
                <div className="h-full image-cover" style={{ backgroundImage: `url(${img})` }} />
            </div>
            {/* <div className={`bg-white rounded-lg shadow-lg m-4`}>
                <img src={imgURL} alt="" className="rounded-t-lg w-full" style={{ height: '200px', objectFit: 'cover' }}/>
                <div className="p-6">
                    <h2 className="font-bold mb-2 text-2xl text-poppins">
                        {title}
                    </h2>
                    <p className="mb-2">{text}</p>
                    <a href={link} className="hover:text-orange underline">citeste mai mult 👉</a>
                </div>
            </div> */}
        </div>
    );
}

export default BlogCard;