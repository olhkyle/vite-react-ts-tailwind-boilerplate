import React from 'react';

const App = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold">안녕</h1>
    </div>
  );
};

export default App;
