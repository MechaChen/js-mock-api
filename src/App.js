import { useState, useEffect } from 'react';

import { apiGetFirstAlbum } from './apis/albums';
import './App.css';

function App() {
  const [firstAlbum, setFirstAlbums] = useState();

  useEffect(() => {
    apiGetFirstAlbum()
      .then((res) => {
        setFirstAlbums(res.data);
      })
  }, []);

  return (
    <div className="App">
      <div>1st Album</div>
      {firstAlbum && (
        <h1 data-testid="first_album_title">{firstAlbum.title}</h1>
      )}
    </div>
  );
}

export default App;
