import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  // Creating a default style base on props that could be sended
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Setting default values to props
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0, .4)",
  textColor: "#ff6a95",
};

// Useing propTypes to create a type defaults
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
