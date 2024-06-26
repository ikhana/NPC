import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import HeroSection from './components/Hero/HeroSection';
import MovingStrip from './components/MovingStrip';
import ComicPanel from './components/ComicPanel';
import npcVideo from "./assets/gif.mp4"
import npc1Video from "./assets/npcdisc1.mp4"
import npc2Video from "./assets/buynow.gif"
import npctVideo from "./assets/Tokenomics.mp4"
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: #007bff;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <MovingStrip
        sentences={[
          "To the moon, without the doom!",
          "Keep calm and HODL on!",
        ]}
        direction="left"
        tilt={-1}
        backgroundColor="#60afff"
        textColor="#f9f9f9"
      />
      <MovingStrip
        sentences={[
          "In crypto we trust, even when it's a bust.",
          "Why did the token stay home? It was feeling a little crypto-sick!",
        ]}
        direction="right"
        tilt={-2}
        backgroundColor="#99914b"
        textColor="#f9f9f9"
      />
      <HeroSection />
      <MovingStrip
        sentences={[
          "NPC: Not just a coin, it's a movement!",
          "Invest in NPC for a prosperous future!",
        ]}
        direction="left"
        tilt={-1}
        backgroundColor="#60afff"
        textColor="#f9f9f9"
      />
      <MovingStrip
        sentences={[
          "Why should I invest in NPC?",
          "Because it's the future of meme coins!",
        ]}
        direction="right"
        tilt={-2}
        backgroundColor="#99914b"
        textColor="#f9f9f9"
      />
      <ComicPanel
        mediaType="video"
        mediaSrc={npcVideo}
        question="Why is he poor?"
        answer="Because he didn't invest in NPC, lol maybe."
        ctaText="THEN I SHOULD INVEST TO BE RICH"
        ctaLink="https://t.me/NPCsPortal"
      />
      <MovingStrip
        sentences={[
          "Ready to become an NPC millionaire?",
          "Join the NPC revolution now!",
        ]}
        direction="left"
        tilt={-1}
        backgroundColor="#60afff"
        textColor="#f9f9f9"
      />
      <MovingStrip
        sentences={[
          "What's the secret to wealth?",
          "Investing in NPC, of course!",
        ]}
        direction="right"
        tilt={-2}
        backgroundColor="#99914b"
        textColor="#f9f9f9"
      />
   <ComicPanel
        mediaType="video"
        mediaSrc={npc1Video}
        question="Ok, so what is NPC exactly?"
        answer="NPC is the Non-Playable Coin that plays a big role in your wealth!"
        ctaText="DISCOVER THE POWER OF NPC"
        backgroundColor="#007bff"
        textColor="#f9f9f9"
        ctaLink="https://t.me/NPCsPortal"
      />
    <MovingStrip
  sentences={[
    "Ready to become an NPC millionaire?",
    "Invest smart, laugh hard with NPC!",
  ]}
  direction="left"
  tilt={-1}
  backgroundColor="#60afff"
  textColor="#f9f9f9"
/>
<MovingStrip
  sentences={[
    "What's the key to success?",
    "Investing in NPC, obviously!",
  ]}
  direction="right"
  tilt={-2}
  backgroundColor="#99914b"
  textColor="#f9f9f9"
/>
<ComicPanel
  mediaType="image"
  mediaSrc={npc2Video}
  question="So, how do I start investing?"
  answer="Just jump into the NPC pool, the water's fine!"
  ctaText="TAKE THE NPC PLUNGE"
  backgroundColor="#007bff"
  textColor="#f9f9f9"
  ctaLink="https://t.me/NPCsPortal"
/>

      <MovingStrip
        sentences={[
          "NPC: A journey of memes and dreams!",
          "Be part of our meme-tastic adventure!",
        ]}
        direction="left"
        tilt={-1}
        backgroundColor="#60afff"
        textColor="#f9f9f9"
      />
      <MovingStrip
        sentences={[
          "Join the NPC family, where every day is a payout!",
          "NPC: Where memes meet money!",
        ]}
        direction="right"
        tilt={-2}
        backgroundColor="#99914b"
        textColor="#f9f9f9"
      />
         <ComicPanel
       mediaType="video"
       mediaSrc={npctVideo} // Replace with the correct video path
        question="What's tokenomics anyway?"
        answer="It's mentioned, lol. Don't you see? It's the essence of NPC!"
        ctaText="EXPLORE TOKENOMICS"
        backgroundColor="#007bff"
        textColor="#f9f9f9"
        ctaLink="https://t.me/NPCsPortal"
      />
    <Footer/>
    </AppContainer>
  );
}

export default App;
