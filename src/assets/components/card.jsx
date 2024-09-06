// Creating a card component
import "./card.css";

const Card = ({ children }) => {
  return <div className="Card">{children}</div>;
};

const CardTitle = ({title}) => {
  return <h4 className="CardTitle">{title}</h4>;
};

const CardText = ({des}) => {
  return <p className="CardText">{des}</p>;
};

const CardContent = ({ children }) => {
  return <div className="CardContent">{children}</div>;
};

const CardImage = ({url, alt, style, width, height,...props}) => {
  return (
    <img
      className="CardImage"
      height={height}
      width={width}
      src={url}
      alt={alt ?? "image"}
    />
  );
};

export { Card, CardText, CardTitle, CardImage, CardContent };
