import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('Testing Component basics', () => {
  test('The component rendered', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<HomeScreen />);
  });
});
