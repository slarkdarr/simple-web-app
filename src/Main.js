// import logo from './logo.svg';

function App() {
  return (
    <div
      class="py-20"
      style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
    >
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white text-center">Welcome!</h2>
        <h3 class="text-2xl mb-8 text-gray-200 text-center">
          A simple web application
        </h3>

        <p class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-center">
          Made using React.js
        </p>
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
