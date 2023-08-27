import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenParamsList} from '../types/navigation';

const useTypedNavigation = () =>
  useNavigation<NativeStackNavigationProp<ScreenParamsList>>();

export default useTypedNavigation;
