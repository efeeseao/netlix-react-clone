import React, { useEffect } from 'react';

import api from './server/api';

function App() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      console.log(list);
    }
    loadAll();
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
