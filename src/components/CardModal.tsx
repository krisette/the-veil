import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { images } from '../assets/images';
import { getCardInterpretation } from '../utils/api';
import { Body, Title } from '../ui/text';
import { TextButton } from '../ui/buttons';

const CardModal = ({ visible, cards, onClose }) => {
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [apiResult, setApiResult] = useState('');

  const handlePress = (index) => {
    setFlippedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const handleShowResult = async () => {
    const isThreeCardSpread = cards.length === 3;

    if (isThreeCardSpread) {
      try {
        const result = await getCardInterpretation(cards);
        setApiResult(result);
        setShowResultModal(true);
      } catch (error) {
        console.error('Error fetching interpretation:', error);
      }
    }
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      className="justify-center items-center m-0"
    >
      <View className="w-[90%] h-[80%]">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-8"
        >
          {cards.map((card, index) => {
            const isFlipped = flippedIndices.includes(index);
            const imageSource = images[card?.image];
            if (!imageSource) {
              console.error(`No image found for key: ${card?.image}`);
            }
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                onPress={() => {
                  console.log(`Card ${index} pressed`);
                  handlePress(index);
                }}
                className="w-[300px] h-[527px] mx-4 justify-center items-center"
              >
                {isFlipped ? (
                  <View
                    className="w-full h-full justify-center items-center p-4 bg-white rounded-lg"
                  >
                    <Title className="text-[24px]">{card.name}</Title>
                    {card.orientation !== 'up' && (
                      <Body className="text-[16px]">Reversed</Body>
                    )}
                    <Text>
                      {card.orientation === 'up'
                        ? card.meaning_up
                        : card.meaning_rev}
                    </Text>
                  </View>
                ) : (
                  <Image
                    source={imageSource}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      transform: [
                        { rotate: card.orientation === 'up' ? '0deg' : '180deg' },
                      ],
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {cards.length === 3 && (
          <View className="items-center mb-4">
            <TextButton onPress={handleShowResult}>What does it all mean? 👀</TextButton>
          </View>
        )}
      </View>
      <Modal isVisible={showResultModal}>
        <View className="h-[50%] bg-white">
          <ScrollView className="flex-1">
            <View className="p-20">
              <Text>API Result:</Text>
              <Text>{apiResult}</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setShowResultModal(false)}
            className="items-center p-10"
          >
            <Text>Close Result</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Modal>
  );
};

export default CardModal;
