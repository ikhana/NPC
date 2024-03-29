// Header.js
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png'; // Correct path to your logo image
import React, { useState } from 'react';

import popupImage1 from '../assets/post1.jpg'; // Adjust with your path
import popupImage2 from '../assets/post3.jpg'; // Adjust with your path
import TwitterIcon from "../assets/Twitter.png";
import SendIcon from "../assets/Send.png";


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
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000; // Make sure it's above other elements
  display: ${props => props.show ? 'block' : 'none'};
  width: 60%; // Use a percentage width for responsiveness
  max-width: 400px; // Ensure it doesn't get too large on wider screens

  @media (min-width: 768px) {
    padding: 40px; // More padding on larger screens
  }
`;

const PopupImage = styled.img`
  width:100%;
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
background-color: linear-gradient(to center, #007bff, #007bff 70%, #ffffff 110%);
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

// Define your keyframes for the hover effect
const hoverGrow = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.1); }
100% { transform: scale(1); }
`;

const Button = styled.button`
  background-color: #99914b; // Subdued Yellow
  border: none; // Remove the border for a flatter design
  border-radius: 20px;
  color: #f9f9f9; // Off-White text color
  padding: 6px 14px; // Set padding for the button
  font-size: 14px; // Set a fixed font size for all screen sizes
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  margin: 8px; // Space between buttons
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    animation: ${hoverGrow} 0.5s ease-in-out forwards;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); // Enhanced shadow on hover for depth
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
  height: 150px;
  animation: ${rotate} 20s linear infinite, ${float} 6s ease-in-out infinite;
`;

const ResponsiveLogo = styled(Logo)`
  @media (max-width: 768px) {
    height: 130px; // Smaller logos for tablet and mobile
  }

  
`;

const HeaderTitle = styled.h1`
  font-family: 'Bangers', cursive;
  color: #f9f9f9;
  text-align: center;
  width: 50%;
  font-size: 2.5rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem; // Smaller title for tablets
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Even smaller for mobiles
  }
`;




const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLink = styled.a`
  margin: 0 10px;
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
`;
const PopupButton = styled(Button)`
  margin-top: 15px; // Add some space above the buttons inside the popup
  width: auto; // Let the button size be determined by its content
`;

const socialMediaLinks = [
  { icon: SendIcon, link: "https://t.me/NPCsPortal" },
  { icon: TwitterIcon, link: "https://x.com/imnpcs" },
];




  
const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');
  
    // Function to handle opening the popup with the correct image
    const showFirstPopup = () => {
      setShowPopup(true);
      setPopupImage(popupImage1);
    };
  
    const showSecondPopup = () => {
      setShowPopup(true);
      setPopupImage(popupImage2);
    };
  
    // Function to close the popup
    const closePopup = () => {
      setShowPopup(false);
      setPopupImage('');
    };

    return (
        <>
            <HeaderContainer>
                <ResponsiveLogo src={logo} alt="Logo" />
                <SocialIconsContainer>
                    {socialMediaLinks.map((link, index) => (
                        <IconLink key={index} href={link.link} target="_blank">
                            <IconImage src={link.icon} alt={`Social icon ${index}`} />
                        </IconLink>
                    ))}
                </SocialIconsContainer>
                <HeaderTitle> Non-Playing Characters</HeaderTitle>
                <Button onClick={showFirstPopup}>EHY ME !</Button>
                <Button onClick={showSecondPopup}>EHY NO ME !</Button>
                <ResponsiveLogo src={logo} alt="Logo" />
            </HeaderContainer>
            {showPopup && (
        <>
          <Overlay show={showPopup} onClick={closePopup} />
          <Popup show={showPopup}>
            <PopupImage src={popupImage} alt="Popup" />
            <PopupButton onClick={() => window.open('https://t.me/NPCsPortal', '_blank')}>Buy NPC</PopupButton>
            <PopupButton onClick={() => window.open('https://x.com/imnpcs', '_blank')}>Radium Link</PopupButton>
          </Popup>
        </>
      )}
        </>
    );
};

export default Header;