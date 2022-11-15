// import logo from './logo.svg';
import { useState } from 'react';
import SongList from './SongList';
import Card from './Card';
import { CardContent } from './CardData';
import Login from './Login';
import TaskList from './TaskList';

import pi, { doublePi, triplePi as triPi } from './myMath';
import './App.css';

function App() {
  let subName = 'Omar';
  let [isLoggedIn, setLoggedIn] = useState(false);  
  
  function logUser() {
    setLoggedIn(true);
  }
  
  function logOutUser() {
    setLoggedIn(false);
  }

  function renderContent(subName) {
    let num = 69;
    let name = subName;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const image = 'https://picsum.photos/200';
    let n1 = Math.floor(Math.random()*10);
    let n2 = Math.floor(Math.random()*10);
    return (
      <div>
        <button onClick={logOutUser}>Log out</button>
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

  return (
    <div>
      {isLoggedIn ? renderContent(subName)  : <Login handler={logUser}/>}
      <TaskList/>
    </div>
  );
}

export default App;
