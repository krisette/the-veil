import axios from 'axios';

export const getCardInterpretation = async (cards) => {
  const prompt = `Interpret a three-card tarot spread with the following cards:\n${cards
    .map((card) =>
      card.orientation === 'up'
        ? card.name
        : `${card.name} Reversed`
    )
    .join('\n')}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer`,
        },
      }
    );

    return response.data.choices[0]?.message.content.trim();
  } catch (error) {
    console.error('Error fetching interpretation:', error);
    throw error;
  }
};

export const getDrawnCards = async (count) => {
  try {
    const response = await axios.get()
  }
