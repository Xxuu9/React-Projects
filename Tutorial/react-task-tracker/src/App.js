function App() {
const name = 'Xiangxu'
const x = true

  return (
    // whatever you returns has to be a single element
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes': 'No'}</h2>
    </div>
  );
}

export default App;
