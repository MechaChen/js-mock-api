import { render, screen } from '@testing-library/react';
import App, { getFirstAlbumTitle } from './App';

describe('getFirstAlbumTitle', () => {
  describe('by default', () => {
    it('should return quidem molestiae enim', async () => {
      const title = await getFirstAlbumTitle();  // Run the function
      expect(title).toEqual('quidem molestiae enim');
    });
  })
});