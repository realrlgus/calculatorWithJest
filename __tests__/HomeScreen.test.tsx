import 'react-native';
import '@testing-library/jest-native';
import React from 'react';

import {it, describe, expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../src/components/navigation/StackNavigator';
import CalculatorScreen from '../src/screens/CalculatorScreen';

describe('Home 화면이 제대로 보이는가?', () => {
  it('타이틀이 제대로 보이는가?', async () => {
    const homeScreen = <HomeScreen />;

    render(homeScreen);

    const title = await screen.getByText('홈 화면 입니다');
    expect(title).toBeOnTheScreen();
  });

  it('계산기로 가기 버튼이 제대로 보이는가?', async () => {
    const homeScreen = <HomeScreen />;
    render(homeScreen);

    const goToCalculateButton = await screen.findByText('계산기로 가기');
    expect(goToCalculateButton).toBeOnTheScreen();
  });
});

describe('Home 화면 버튼 이벤트', () => {
  it('계산기로 가기 버튼을 누르면 계산기 페이지로 가지는가?', async () => {
    const homeScreen = <HomeScreen />;

    render(homeScreen);

    const goToCalculateButton = await screen.findByText('계산기로 가기');

    fireEvent(goToCalculateButton, 'press');

    const calculatorScreen = <CalculatorScreen />;
    render(calculatorScreen);

    const newTitle = await screen.findByText('계산기');

    expect(newTitle).toBeOnTheScreen();
  });
});
