import { useState, type ReactNode } from 'react';
import { ArrowLeft } from '@assets/icons/arrowLeft';
import { Question } from '@assets/icons/question';
import '@styles/animation/cardFlip.scss';

interface CardsFlipProps {
    frontCard: ReactNode;
    backCard: ReactNode;
}

export const CardFlip = ({ frontCard, backCard }: CardsFlipProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [flipKey, setFlipKey] = useState(0);

    const handleFlip = () => {
        setIsFlipped(prev => !prev);
        setFlipKey(prev => prev + 1);
    };


    return (
        <div className="card-flip__container">
            <div className={`card-flip__inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-flip__front">
                    {frontCard}
                </div>
                <div className="card-flip__back" key={`back-${flipKey}`}>
                    {backCard}
                </div>
            </div>
            {isFlipped ? (
                <button className="flip_btn btn_back" onClick={handleFlip}>
                    <ArrowLeft
                        colorPrimary='#2e2e2e'
                        width='50'
                        height='50'
                    />
                </button>
            ) : (
                <button className="flip_btn btn_front" onClick={handleFlip}>
                    <Question
                        colorPrimary='#2e2e2e'
                        width='50'
                        height='50'
                        secondsDelay={flipKey === 0 ? 4 : 0}
                    />
                </button>
            )}
        </div>
    );
}