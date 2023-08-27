import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import useTypedNavigation from '../hooks/useTypedNavigation';
import {ScreenNames} from '../types/navigation';

const HomeScreen = () => {
  const navigation = useTypedNavigation();

  const goToCalculator = () => navigation.navigate(ScreenNames.Calculator);
  return (
    <SafeAreaView>
      <View>
        <Text>홈 화면 입니다</Text>
        <Pressable onPress={goToCalculator}>
          <Text>계산기로 가기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
