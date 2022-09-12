import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
          <br />
          <img src={logo} className='App-logo' img-fluid alt='logo' />
        </header>
        <main>
          <Dictionary defaultKeyword="smile" />
        </main>
        <footer className="App-footer">
          <small>This project was coded by <a href='https://github.com/Daria-Sazon' target='_blank' rel='noreferrer'>Daria Sazon</a> and is <a
            href='https://github.com/Daria-Sazon/dictionary-project' target='_blank' rel='noreferrer'> open-sourced on GitHub</a> and <a
            href='https://elaborate-semifreddo-5455d6.netlify.app/' target='_blank' rel='noreferrer'>hosted on Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}
