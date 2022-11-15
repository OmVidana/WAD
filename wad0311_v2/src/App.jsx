// import logo from './logo.svg';
import SongList from './SongList';
import pi, { doublePi, triplePi as triPi } from './myMath';
import './App.css';
import Card from './Card';
import { CardContent } from './CardData';

function App() {
  let num = 69;
  let name = 'Omar Vidaña';
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const image = 'https://picsum.photos/200';
  let n1 = Math.floor(Math.random()*10);
  let n2 = Math.floor(Math.random()*10);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Hello World! { name }</h1>
      <p>Lorem ipsum { year }</p>
      <img src={image + '?grayscale'} alt="random pic"/> 
      < SongList />
      <h3>The addition of { n1 } and { n2 } is { n1+n2 }</h3>
      <h3>My lucky number is { num }</h3>
      <h3>My random number is { Math.floor(Math.random()*10)}</h3>
      <h3>The double of Pi is { doublePi() }</h3>
      <h3>The triple of Pi is { triPi() }</h3>
      <h3>The value of Pi is { pi }</h3>
      {CardContent.map((item, index) => {
        return(
          <Card 
            img = {item.img}
            name = {item.name}
            favoriteNumber = {item.favoriteNumber}
            mail = {item.mail}
          />
        );
      })}
      
    </div>
  );
}

export default App;
