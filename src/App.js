    shuffle(array) {
        const returnArray = [];
        const copyArray = array.slice();
        for (let i = 0; i < array.length; i++) {
            const randIndex = Math.floor(Math.random() * copyArray.length);
            returnArray.push(copyArray[randIndex]);
            copyArray.splice(randIndex, 1);
        }
        return returnArray;
    }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
