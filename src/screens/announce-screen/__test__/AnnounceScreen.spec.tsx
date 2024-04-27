import {render} from '@testing-library/react-native';
import AnnounceScreen from '../AnnounceScreen';
import auth from '@react-native-firebase/auth';
test('Render the AnnouceScreen', () => {
  render(<AnnounceScreen />);
});
