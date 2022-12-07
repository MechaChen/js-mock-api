import axios from 'axios';

import './App.css';

export const getFirstAlbumTitle = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
  return res.data[0].title;
};

function App() {
  return (
    <div className="App">
      <div>Mock starter</div>
    </div>
  );
}

export default App;
