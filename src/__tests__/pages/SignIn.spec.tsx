import React from 'react-native';
import { render } from 'react-native-testing-library';
import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should constains email password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
