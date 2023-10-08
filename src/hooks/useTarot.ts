import { useState, useCallback } from 'react';
import cardsJson from '../data/card_data.json';
import { Card } from '../types/cardTypes';

const useTarot = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const { cards } = cardsJson;

  const getRandomNumber = useCallback(async (num, min, max) => {
    try {
      const response = await fetch(`https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
      const data = await response.text();
      return data.trim().split('\n').map(Number);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch random number');
    }
  }, []);

  const drawCards = useCallback(async (count) => {
    try {
      // Get random indices for selecting cards.
      const randomIndices = await getRandomNumber(count, 0, cards.length - 1);

      // Get random numbers for determining card orientation.
      const randomOrientations = await getRandomNumber(count, 0, 1);

      // Create an array of drawn cards with random orientations.
      const drawnCards: Card[] = randomIndices.map((index, i) => ({
        ...cards[index],
        orientation: randomOrientations[i] === 0 ? 'up' : 'reversed',
      }));

      setSelectedCards(drawnCards);
    } catch (error) {
      console.error(error);
    }
  }, [getRandomNumber, cards]);

  return {
    selectedCards,
    drawCards,
  };
};

export default useTarot;
