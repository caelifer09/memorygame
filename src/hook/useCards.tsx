import React from 'react';
import {shuffleArray} from '@/utils'

import type {images, CardType, GameFlow} from '@/types'

export const useCards = (name:string) => {
    const [images, setImages] = React.useState<string[]>([]);
    const [cards, setCards] = React.useState<CardType[] | null>(null);
    const [lastCard, setLastCard] = React.useState<CardType | null>(null);
    const [game, setGame] = React.useState<GameFlow>({point: 0, fail: 0, turn: 0});
    const [loading, setLoading] = React.useState<boolean>(false);

    const getImage = async (amount: number): Promise<void> => {
        let secret = 'sfw'
        if (name === 'cael') secret = 'nsfw'
        try {
            setLoading(true);
          const res = await fetch(`https://api.waifu.pics/many/${secret}/neko`, {
            method:'POST',
            headers: {
              'content-type': 'application/json;charset=UTF-8',
            },
            body:  JSON.stringify({}),
          });
          if (res.status != 200) {
          const data = await res.json()
          console.log(data)
          }
          const images: images = await res.json();
          setImages(images.files.slice(0, amount));
          setLoading(false);
        } catch (error: any) {
            console.log(error);
        }
    }

    const createBoard = (cards: string[]): CardType[] => {
        const cardBack = "/cardback.png"
        const board = [...cards, ...cards].map((card, i) => ({
          id: `card${i}`,
          flipped: false,
          backImage: cardBack,
          frontImage: card,
          matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
        }));
      
        return shuffleArray(board);
    };

    const handleClickCard = (currentCard: CardType): void => {
        setCards(state => state && state.map(card =>card.id === currentCard.id ? {...card, flipped: true} : card))
        if (!lastCard) {
            return setLastCard(currentCard);
        }
        if (lastCard.matchingCardId === currentCard.id) {
            setGame({...game, point: game.point +1, turn: game.turn +1})
        } else {
            setGame({...game, fail: game.fail +1, turn: game.turn +1})
            setTimeout(() => {
                setCards(prev =>
                  prev && prev.map(card =>
                    card.id === lastCard.id || card.id === currentCard.id ? { ...card, flipped: false } : card
                  )
                );
            }, 1000);
        }
        return setLastCard(null)
    }

    const gameStart = (amount: number): void => {
        setCards(null)
        setLastCard(null)
        setGame({point: 0, fail: 0, turn: 0})
        getImage(amount)
    }

    React.useEffect(() => {
        if (images.length > 0) {
            setCards(createBoard(images))
        }
    },[images])

    return {
        game,
        cards,
        loading,
        gameStart,
        handleClickCard
    }

}