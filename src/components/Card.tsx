import React from 'react'
import Image from 'next/image';

//types
import {CardType} from '@/types'

interface Props {
    card: CardType;
    callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
    const handleClick = () => {
      if (!card.flipped) return callback(card);
    };

    return (
    <div className="w-[200px] h-[180px]  relative shadow-lg shadow-gray-500/20 rounded hover:scale-105 hover:shadow-violet-600/40 transition-all cursor-pointer hover:z-10 [perspective:1000px] group bg-transparent">
        <div className={`relative w-full h-full [transform-style:preserve-3d] transition-all ${card.flipped && '[transform:rotateY(180deg)]'} duration-[0.5s]`}>
            <Image 
                src={card.frontImage} 
                alt="card front"
                width={200}
                height={180}
                priority
                className="object-center absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] object-cover" />
            {!card.flipped && (
                <Image 
                    src={card.backImage} 
                    alt="card back"
                    onClick={handleClick}
                    width={200}
                    height={180}
                    priority
                    className="absolute w-full h-full [backface-visibility:hidden]"/>
            )}
        </div>
    </div>
    );
  };
  
  export default Card;