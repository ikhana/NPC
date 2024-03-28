// MovingStrip.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollRightToLeft = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

const scrollLeftToRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`;

const MovingStripContainer = styled.div`
  background-color: ${props => props.backgroundColor || '#60afff'};
  overflow: hidden;
  transform: rotate(${props => props.tilt || 0}deg);
`;

const MovingText = styled.div`
  display: inline-flex;
  white-space: nowrap;
  animation: ${(props) => props.direction === 'left' ? scrollRightToLeft : scrollLeftToRight} 30s linear infinite;
`;

const Sentence = styled.p`
  color: ${props => props.textColor || '#f9f9f9'};
  padding: 10px 50px;
  font-family: 'Press Start 2P', cursive;
`;

const MovingStrip = ({ sentences = [], direction = 'left', tilt, backgroundColor, textColor }) => {
  return (
    <MovingStripContainer tilt={tilt} backgroundColor={backgroundColor}>
      <MovingText direction={direction}>
        {sentences.length ? sentences.map((sentence, index) => (
          <Sentence key={index} textColor={textColor}>{sentence}</Sentence>
        )) : (
          <Sentence textColor={textColor}>No content provided</Sentence>
        )}
      </MovingText>
    </MovingStripContainer>
  );
};

export default MovingStrip;
