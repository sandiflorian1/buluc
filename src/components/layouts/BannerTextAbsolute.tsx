import "../../css/banner-text-absolute.css";

export default function BannerTextAbsolute ({ imageURL, title, children, direction, className }: any) {
  return (
    <div className={`banner-text-absolute ${className}`} >
      {direction === 'right' && (
         <div className={`image ${direction}`} style={{ backgroundImage: `url(${imageURL})` }}></div>
      )}

      <div className={`text-wrapper ${direction}`}>
        <div className="text">
          <h4 className="title pb-4">
              {title}
          </h4>

          {children}
        </div>
      </div>

      {direction === 'left' && (
        <div className={`image ${direction}`} style={{ backgroundImage: `url(${imageURL})` }}></div>
      )}
    </div>
    );
  }
  