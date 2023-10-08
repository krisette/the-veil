import instance from './instance';
import { Card } from '../types';

export const getCardInterpretation = async (cards: Card[]) => {
  try {
    const response = await instance.post('/gpt-reading', { cards });
    return response.data.data; 
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const drawCards = async (count: number) => {
  try {
    const response = await instance.get(`/cards?count=${count}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


