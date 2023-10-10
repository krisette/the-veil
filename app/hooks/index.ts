import { useDrawCards, useGetCardInterpretation } from '../queries';
import { Card } from '../types';
import { useCallback, useState } from 'react';

export const useTarot = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const drawCardsMutation = useDrawCards();
  const getCardInterpretationMutation = useGetCardInterpretation();

  const drawCards = useCallback(
    async (count: number) => {
      try {
        const cards = await drawCardsMutation.mutateAsync(count);
        setSelectedCards(cards);
      } catch (error) {
        console.error(error);
      }
    },
    [drawCardsMutation],
  );

  const getCardInterpretation = useCallback(
    async (cards: Card[]) => {
      try {
        return await getCardInterpretationMutation.mutateAsync(cards);
      } catch (error) {
        console.error(error);
      }
    },
    [getCardInterpretationMutation],
  );

  return {
    selectedCards,
    drawCards,
    getCardInterpretation,
    isDrawing: drawCardsMutation.isLoading,
    isInterpreting: getCardInterpretationMutation.isLoading,
    drawError: drawCardsMutation.error,
    interpretationError: getCardInterpretationMutation.error,
  };
};

export default useTarot;
