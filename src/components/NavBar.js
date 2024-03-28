// Header.js
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; // Correct path to your logo image
import React, { useState } from 'react';

import popupImage1 from '../assets/post1.jpg'; // Adjust with your path
import popupImage2 from '../assets/post3.jpg'; // Adjust with your path


// Define our keyframes
const rotate = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(360deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000; // Make sure it's above other elements
  display: ${props => props.show ? 'block' : 'none'};
  width: 80%; // Use a percentage width for responsiveness
  max-width: 500px; // Ensure it doesn't get too large on wider screens

  @media (min-width: 768px) {
    padding: 40px; // More padding on larger screens
  }
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto; // Ensure the image scales correctly
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; // Behind the popup, but above other items
  display: ${props => props.show ? 'block' : 'none'};
`;


const HeaderContainer = styled.header`
  background-color: #60afff; // Primary color
  padding: 10px 5%; // Adjust padding and use percentage for horizontal padding
  display: flex;
  flex-direction: column; // Stack elements on smaller screens
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row; // Use row layout for wider screens
    justify-content: space-around;
    padding: 20px 5%;
  }
`;



/*const tooltipAppear = keyframes`
  from { opacity: 0; visibility: hidden; }
  to { opacity: 1; visibility: visible; }
`;



const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #f9f9f9 transparent transparent transparent;
  }
`;
*/
const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Button = styled.button`
  background-color: #99914b; // Subdued Yellow
  border: 2px solid #f9f9f9; // Off-White
  border-radius: 25px;
  color: #f9f9f9; // Off-White text color
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  margin: 0 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    animation: ${hoverEffect} 0.5s ease-in-out infinite;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  }
`;



/*const ButtonWithTooltip = styled(Button)`
  position: relative;
  & ${Tooltip} {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
  }
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
    animation: ${tooltipAppear} 0.5s ease-in-out;
  }
`;*/

const Logo = styled.img`
  height: 100px;
  animation: ${rotate} 20s linear infinite, ${float} 6s ease-in-out infinite;
`;

const ResponsiveLogo = styled(Logo)`
  @media (max-width: 768px) {
    height: 60px; // Smaller logos for tablet and mobile
  }

  @media (max-width: 480px) {
    display: none; // Hide logos on very small screens
  }
`;

const HeaderTitle = styled.h1`
  font-family: 'Bangers', cursive;
  color: #f9f9f9;
  text-align: center;
  width: 100%;
  font-size: 2.5rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem; // Smaller title for tablets
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Even smaller for mobiles
  }
`;

const HumorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0; // Add some margin on top and bottom for smaller screens

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0; // Remove margin for wider screens
  }
`;
const Joke = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #f9f9f9;
  margin: 10px 0;
`;





  
const Header = () => {
    const [popupImage, setPopupImage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
  
    const showFirstPopup = () => {
      setPopupImage(popupImage1);
      setShowPopup(true);
    };
  
    const showSecondPopup = () => {
      setPopupImage(popupImage2);
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <>
        <HeaderContainer>
          <ResponsiveLogo src={logo} alt="Left Logo" />
          <HumorSection>
            <HeaderTitle>Meme Coin Madness!</HeaderTitle>
            <Joke>Why did the token stay home? It was feeling a little crypto-sick!</Joke>
            <Button onClick={showFirstPopup}>Show First Popup</Button>
            <Button onClick={showSecondPopup}>Show Second Popup</Button>
          </HumorSection>
          <ResponsiveLogo src={logo} alt="Right Logo" />
        </HeaderContainer>
        {showPopup && (
          <>
            <Overlay show={showPopup} onClick={closePopup} />
            <Popup show={showPopup}>
              <PopupImage src={popupImage} alt="Popup" />
            </Popup>
          </>
        )}
      </>
    );
  };
  
  export default Header;
  