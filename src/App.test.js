import { getFirstAlbumTitle } from './App';

// 1. import the module we want to mock
import axios from 'axios';

// 2. mock the entire module, 
jest.mock('axios');

describe('getFirstAlbumTitle', () => {
  describe('by default', () => {
    it('should return quidem molestiae enim', async () => {
      // mock the return value
      axios.get.mockResolvedValue({
        data: [
          {
            title: 'My 1st title',
          }
        ]
      })

      const title = await getFirstAlbumTitle();  // Run the function
      expect(title).toEqual('My 1st title');
    });
  })
});