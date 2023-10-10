// In your HomePage component
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import useTarot from '../hooks';
import CardModal from '../components/CardModal';
import Title from '../../ui/text/Title';
import { TextButton } from '../../ui/buttons';
import { Body } from '../../ui/text';

const HomePage = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [, setIsLoading] = useState(false);
	const { selectedCards, drawCards } = useTarot();
	const [resetFlag, setResetFlag] = useState(false);

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
				<Body className="text-center">Good morning. Choose your spread.</Body>
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
