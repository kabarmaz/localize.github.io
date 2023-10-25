import React from 'react';
import './App.css';



function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const containerBgStyle = {
    backgroundRepeat: 'repeat', // Makes the background image repeat
  };

  const buttonStyle = {
    backgroundColor: 'gray',
    padding: '30px 60px',
    border: 'none',
    fontSize: '1.5rem',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.1)',
    transition: 'transform 0.2s', // Adds a transition for the hover effect
  };

  const [isButtonHovered, setButtonHovered] = React.useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <body>
      <div className="container-bg" style={containerBgStyle}>
        <div className="container" style={containerStyle}>
          <div className="text-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScQc1zcXwG7bg4zseA4uWupOK0vBf3q94H-KYELFTcQs175pQ/viewform">
              <button
                type="button"
                className={`btn btn-outline-danger ${isButtonHovered ? 'hovered' : ''}`}
                style={{ ...buttonStyle, ...(isButtonHovered && buttonHoverStyle) }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <h2> 
                  Click HERE !
                </h2>
              </button>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
