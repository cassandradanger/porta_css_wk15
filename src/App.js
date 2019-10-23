import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './cardComponent'

class App extends Component {

  state = {
    array: [
      {
        name: "Casie",
        food: "pizza",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
      },
      {
        name: "Dev",
        food: "veggies",
        imgUrl: "https://media.mnn.com/assets/images/2015/08/fruits_and_veggies.jpg.653x0_q80_crop-smart.jpg"
      },
      {
        name: "Mary",
        food: "yogurt",
        imgUrl: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/field%252Fimage%252Fgoats-milk-yogurt.jpg?itok=uy_vTNn2"
      },
      {
        name: "Luke",
        food: "burgers",
        imgUrl: "https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg"
      },
      {
        name: "Dane",
        food: "tacos",
        imgUrl: "https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-1-2.jpg"
      },
      {
        name: "Kris",
        food: "pasta",
        imgUrl: "https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg"
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <header>
          <a href="http://www.google.com"><img src={logo} className="logo" alt="logo" /></a>
          <h1>we are stylin' now!</h1>
          <a href="http://www.linkedin.com"><img src='http://cdn.onlinewebfonts.com/svg/img_508630.png 'className="profile" alt="logo"/></a>
        </header>
        <main>
          <ul>
            {this.state.array.map((item) => {
              return<CardComponent key={item.name} data={item}/>
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
