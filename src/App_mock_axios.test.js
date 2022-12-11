import { render, screen } from '@testing-library/react';

import App from './App';

// 1. import the module we want to mock
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 2. mock the entire module, 
const mockAxios = new MockAdapter(axios);

// directly mock axios
describe('getFirstAlbumTitle - mock axios', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('by default', () => {
    it('should show album first title', async () => {
      // mock the return value
      mockAxios.onGet('/albums/1').reply(200, {
        title: 'first album',
      })
      
      const { findByTestId, debug } = render(<App />);
      const firstAlbumTitle = await findByTestId('first_album_title');

      screen.debug();

      expect(firstAlbumTitle).toHaveTextContent('first album');
    });
  })
});