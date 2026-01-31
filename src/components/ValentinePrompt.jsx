import React, { useState, useEffect } from 'react';
import '../App.css';

const ValentinePrompt = () => {
    const [noClickCount, setNoClickCount] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const [noScale, setNoScale] = useState(1);
    const [yesFontSize, setYesFontSize] = useState(1.2);
    const [noFontSize, setNoFontSize] = useState(1.2);
    const [response, setResponse] = useState('');
    const [responseType, setResponseType] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const [noButtonVisible, setNoButtonVisible] = useState(true);

    const messages = [
        "Are you sure? 🥺",
        "Please? Pretty pretty girl please? 💕",
        "I will be the BEST BF and LAST one!🌹",
        "I make my promise to u 🥺✨",
        "Come on give ye silly boi last chance 💖",
        "I'll be so sad if you say no... 😢 (NO MORE LIKING OTHER PPL POSTS)",
        "Just click the YES buttonnnnn, so big leeeee 💗",
        "The YES button is calling for uuu 🎯",
        "Okay okay, I guess you HAVE to say yes now! 😄💕"
    ];

    const createConfetti = () => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.background = ['#ff6b9d', '#c44569', '#d4af37', '#ffeef4'][Math.floor(Math.random() * 4)];
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    };

    const handleYes = () => {
        createConfetti();
        setResponse('🎉 Yayyy I love uuu, dun sad alr kayss 💕');
        setResponseType('yes-response');
        setShowButtons(false);
    };

    const handleNo = () => {
        const newClickCount = noClickCount + 1;
        setNoClickCount(newClickCount);

        // Increase YES button size and decrease NO button size
        const newYesFontSize = 0.8 + (newClickCount * 0.2);
        const newYesScale = 1 + (newClickCount * 0.2);
        const newNoFontSize = Math.max(0.5, 1.2 - (newClickCount * 0.2));
        const newNoScale = Math.max(0.3, 1 - (newClickCount * 0.15));

        setYesFontSize(newYesFontSize);
        setYesScale(newYesScale);
        setNoFontSize(newNoFontSize);
        setNoScale(newNoScale);

        // Show encouraging message
        const messageIndex = Math.min(newClickCount - 1, messages.length - 1);
        setResponse(messages[messageIndex]);
        setResponseType('no-response');

        // If clicked too many times, hide NO button
        if (newClickCount >= 8) {
            setNoButtonVisible(false);
            setResponse("Okay okay, I guess you HAVE to say yes now! 😄💕");
        }
    };

    // Hearts background component
    const HeartsBackground = () => (
        <div className="hearts-bg">
            <div className="heart-float">💕</div>
            <div className="heart-float">💖</div>
            <div className="heart-float">💕</div>
            <div className="heart-float">💗</div>
            <div className="heart-float">💕</div>
            <div className="heart-float">💖</div>
            <div className="heart-float">💕</div>
            <div className="heart-float">💗</div>
            <div className="heart-float">💕</div>
        </div>
    );

    return (
        <>
            <HeartsBackground />
            <div className="valentine-prompt">
                <div className="decoration top-left">🌹</div>
                <div className="decoration top-right">🌹</div>
                <div className="decoration bottom-left">💝</div>
                <div className="decoration bottom-right">💝</div>

                <div className="heart-icon">❤️</div>
                <h1>Will You Be My Valentine?</h1>
                <p className="subtitle">This Valentine's Day, I have one question...</p>
                <p className="message">
                    BUBBA MS CHIN JIA XIN JOEY💖, will you be my Valentine? I promise to make it a day filled with love, joy, and unforgettable memories. Please say yes!
                </p>

                <div
                    className="button-container"
                    style={{
                        opacity: showButtons ? 1 : 0,
                        pointerEvents: showButtons ? 'auto' : 'none'
                    }}
                >
                    <button
                        className="yes-btn"
                        onClick={handleYes}
                        style={{
                            fontSize: `${yesFontSize}em`,
                            transform: `scale(${yesScale})`
                        }}
                    >
                        <span>Yes! 💖</span>
                    </button>
                    {noButtonVisible && (
                        <button
                            className="no-btn"
                            onClick={handleNo}
                            style={{
                                fontSize: `${noFontSize}em`,
                                transform: `scale(${noScale})`
                            }}
                        >
                            <span>Maybe Later 😊</span>
                        </button>
                    )}
                </div>

                {response && (
                    <div className={`response ${responseType}`}>
                        {response}
                    </div>
                )}
            </div>
        </>
    );
};

export default ValentinePrompt;