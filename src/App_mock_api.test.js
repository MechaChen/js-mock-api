import { findByTestId, render } from '@testing-library/react';

import { apiGetFirstAlbum } from './apis/albums';
import App from './App';

jest.mock('./apis/albums', () => ({
  apiGetFirstAlbum: jest.fn(),
}));

// mock encapsulation api
describe('App - mock api', () => {
  describe('by default', () => {
    it('should show album first title', async () => {
      // mock the return value
      apiGetFirstAlbum.mockResolvedValue({
        data: {
          title: 'first album',
        }
      });
      
      const { findByTestId } = render(<App />);
      const firstAlbumTitle = await findByTestId('first_album_title');

      expect(firstAlbumTitle).toHaveTextContent('first album');
    });
  })
});