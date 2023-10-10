import { useMutation } from 'react-query';
import { drawCards, getCardInterpretation } from '../axios/api';
import { Card } from '../types';

export const useGetCardInterpretation = () => {
  return useMutation<string, Error, Card[]>(getCardInterpretation);
};

export const useDrawCards = () => {
  return useMutation<Card[], Error, number>((count) => drawCards(count));
};
