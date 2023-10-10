import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { images } from '../../assets/images';
import { Body, Title } from '../../ui/text';
import { TextButton } from '../../ui/buttons';
import { Card } from '../types';
import useTarot from '../hooks';
import ReadingSkeleton from './ReadingSkeleton';

interface CardModalProps {
  visible: boolean;
  cards: Card[];
  onClose: () => void;
  reset: boolean;
}

const CardModal: React.FC<CardModalProps> = ({
  visible,
  cards,
  onClose,
  reset,
}) => {
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [apiResult, setApiResult] = useState<string | null>('');

  const { getCardInterpretation, isInterpreting } = useTarot();

  const handlePress = (index) => {
    setFlippedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index],
    );
  };

  const handleShowResult = async () => {
    if (cards.length === 3) {
      setShowResultModal(true);
      try {
        const result = await getCardInterpretation(cards);
        setApiResult(result || '');
      } catch (error) {
        console.error('Error fetching interpretation:', error);
        setApiResult('');
      }
    }
  };

  useEffect(() => {
    if (!visible || reset) {
      setFlippedIndices([]);
    }
  }, [visible, reset]);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      className="justify-center items-center m-0"
    >
      <View className="w-[90%] self-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row"
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
                  handlePress(index);
                }}
                className="w-[300px] h-[527px] mx-4 justify-center items-center"
              >
                {isFlipped ? (
                  <View className="w-full h-full justify-center items-center p-4 bg-secondaryBackground rounded-xl">
                    <Title className="text-[24px] text-primary">
                      {card.name}
                    </Title>
                    {card.orientation !== 'up' && (
                      <Body className="text-[16px] text-primary">Reversed</Body>
                    )}
                    <Body className="text-default mt-4">
                      {card.orientation === 'up'
                        ? card.meaning_up
                        : card.meaning_rev}
                    </Body>
                  </View>
                ) : (
                  <Image
                    source={imageSource}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      transform: [
                        {
                          rotate: card.orientation === 'up' ? '0deg' : '180deg',
                        },
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
            <TextButton onPress={handleShowResult}>
              What does it all mean? 👀
            </TextButton>
          </View>
        )}
      </View>
      <Modal isVisible={showResultModal}>
        <View className="h-[50%] bg-white">
          <ScrollView className="flex-1">
            <View className="p-5">
              <Text>API Result:</Text>
              {isInterpreting ? <ReadingSkeleton /> : <Text>{apiResult}</Text>}
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
