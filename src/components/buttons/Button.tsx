import "../../css/buttons/animated-button.css";

type TypeButton = {
  text: string,
  link?: string,
};

function Button({ text, link }: TypeButton) {
	return (
  <div className="button-wrap">
    <a href={link} className="btn lined-btn">{text}</a> 
  </div>
	);
}

export default Button;
