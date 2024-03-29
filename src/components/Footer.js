// Footer.js
import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../assets/Twitter.png'; // Update the path if necessary
import TelegramIcon from '../assets/Send.png'; // Update the path if necessary

const FooterContainer = styled.footer`
  background-color: #007bff;
  color: #f9f9f9;
  text-align: center;
  padding: 10px 0;
  font-family: 'Press Start 2P', cursive;
  border-top: 2px solid #99914b;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const FooterLink = styled.a`
  color: #f9f9f9;
  text-decoration: none;
  margin: 0 5px;
  &:hover {
    color: #99914b;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} NPC Meme Coin. All rights reserved. |
        <FooterLink href="hhttps://x.com/imnpcs" target="_blank">
          <Icon src={TwitterIcon} alt="Twitter" /> Twitter
        </FooterLink>
        <FooterLink href="https://t.me/NPCsPortal" target="_blank">
          <Icon src={TelegramIcon} alt="Telegram" /> Telegram
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
