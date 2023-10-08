// In your HomePage component
import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
import FadeInSvg from '../components/Logo';
import useTarot from '../hooks';
import CardModal from '../components/CardModal';
import Body from '../ui/text/Body';
import Title from '../ui/text/Title';
import { TextButton } from '../ui/buttons';

const HomePage = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedCards, drawCards } = useTarot();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

const handleDrawCards = useCallback(async (count) => {
    setIsLoading(true);

    await drawCards(count);

    setIsLoading(false);

    toggleModal();
  }, [drawCards]);


  return (
    <View className='pt-20 bg-black h-full'>
      <FadeInSvg onAnimationComplete={() => setIsAnimationComplete(true)} />
      
      {isAnimationComplete && (
        <>
          <Title className='text-white text-center text-2xl lowercase'>Choose your spread.</Title>
<TextButton onPress={() => handleDrawCards(1)} iconName='angle-double-right'>One card</TextButton>
      <TextButton onPress={() => handleDrawCards(3)} iconName='angle-double-right'>Three card</TextButton>
         
        </>
      )}
      <CardModal
        visible={isModalVisible}
        cards={selectedCards}
        onClose={toggleModal}
      />
    </View>
  );
};

export default HomePage;
