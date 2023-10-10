import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import useTarot from '../hooks';
import CardModal from '../components/CardModal';
import Title from '../../ui/text/Title';
import { TextButton } from '../../ui/buttons';
import { Body } from '../../ui/text';
import { useAuth } from '../context/auth';

const HomePage: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [, setIsLoading] = useState(false);
  const { selectedCards, drawCards } = useTarot();
  const { user } = useAuth();
  const [resetFlag, setResetFlag] = useState(false);

  const greeting = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetModal = () => {
    setResetFlag((prev) => !prev);
  };

  const handleDrawCards = useCallback(
    async (count) => {
      setIsLoading(true);

      await drawCards(count);

      setIsLoading(false);

      toggleModal();

      resetModal();
    },
    [drawCards],
  );

  return (
    <View className="pt-16 bg-background h-full">
      <View className="flex justify-center items-center">
        <Title className="text-primary text-center text-[36px] lowercase">
          The Veil
        </Title>
        <View className="bg-zinc-700 h-[1px] mt-3 w-3/4" />
      </View>
      <ScrollView className="px-8">
        <Body className="text-center">
          {greeting()}, {user?.google.givenName}. Choose your spread.
        </Body>
        <TextButton
          onPress={() => handleDrawCards(1)}
          iconName="angle-double-right"
        >
          One card
        </TextButton>
        <TextButton
          onPress={() => handleDrawCards(3)}
          iconName="angle-double-right"
        >
          Three card
        </TextButton>
      </ScrollView>
      <CardModal
        visible={isModalVisible}
        cards={selectedCards}
        onClose={toggleModal}
        reset={resetFlag}
      />
    </View>
  );
};

export default HomePage;
