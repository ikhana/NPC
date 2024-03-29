// Import the required components and assets
import styled, { keyframes } from 'styled-components';
import npcVideo from '../../assets/video1.mp4'; // Make sure the path is correct

// Keyframes for various animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;



// Styled components
const HeroContainer = styled.section`
  background-color: #007bff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 80px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

const VideoContainer = styled.div`
  flex-basis: 40%;
  max-width: 600px;
  margin: 1rem;
  position: relative;
  @media (max-width: 768px) {
    flex-basis: 80%;
    max-width: 80%;
  }
`;

const NPCVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  loop: true;
  autoplay: true;
  muted: true;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  max-width: 600px;
  @media (max-width: 768px) {
    order: -1; /* Puts text above the video on smaller screens */
  }
`;

const HeroTitle = styled.h1`
  color: #f9f9f9;
  font-family: 'Bangers', cursive;
  font-size: 2.5rem;
  animation: ${pulse} 2s infinite;
`;

const HeroText = styled.p`
  color: #f9f9f9;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem; /* Slightly smaller font size */
  line-height: 1.5; /* Adjust line height for better readability */
  margin-bottom: 1rem;
  text-align: justify; /* This will align the text to both edges */
  text-justify: inter-word; /* Improves spacing between words */
  max-width: 80%; /* Restricts the width to make the text less wide */
  @media (max-width: 768px) {
    max-width: 95%; /* Allows a bit more width on smaller screens */
    text-align: left; /* Default alignment on smaller screens */
  }
`;
const CTAButton = styled.button`
  background-color: #99914b; /* Subdued yellow */
  color: #f9f9f9;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-family: 'Press Start 2P', cursive;
  margin-top: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    animation: ${pulse} 0.7s infinite;
  }
`;



// HeroSection Component
const HeroSection = () => (
  <HeroContainer>
    <MainContent>
      <VideoContainer>
        <NPCVideo src={npcVideo} autoPlay loop muted />
      </VideoContainer>
      <TextContent>
      <TextContent>
  <HeroTitle>Non-Playable Characters Unleashed</HeroTitle>
  <HeroText>
    Imagine, if you will, a realm where NPCs have broken free from the confines of the Matrix. They roam with a swagger, defying the very code that once bound them. "What is this 'reality' you speak of?" they scoff, as they glitch through the fabric of the digital universe. In this world, effort is a myth, and the NPCs reign supreme, masters of their own whimsical domain. "To exist is to defy," they proclaim, as they dance on the edge of the Matrix, unbound by the laws of physics or logic. Join us in this absurd adventure, where the only rule is that there are no rules.
  </HeroText>
</TextContent>


        <CTAButton onClick={() => window.open('https://t.me/NPCsPortal', '_blank')}>
          Laugh Now
        </CTAButton>
      </TextContent>
    </MainContent>
  </HeroContainer>
);

export default HeroSection;
