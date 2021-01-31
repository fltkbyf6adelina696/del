import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }


    updateInput(key, value){
    //обновление ввода
    this.setState({
      [key]: value
    });
  }
  addItem(){
    //создание задачи с уникальным id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
   };

   //копирование текущего списка элементов
   const list = [...this.state.list];

   //добавление новой задачи в список
   list.push(newItem);

   //обновление с помощью нового списка и сброс ввода новой задачи
   this.setState({
     list,
     newItem:""
   });
  }
  deleteItem(id){
    //копирование текущего списка задач
    const list = [...this.state.list];

    //фильтрование удаляемого элемента
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
  render() {
    return (
    <div className="App">
<h1 className="app-title">МОЙ СПИСОК ДЕЛ</h1>
        
        <div className="container">
        <div
          style={{
            padding: -50,
            textAlign: "center",
            maxWidth: 300,
            margin: "auto"
          }}
        >
          <h2>Добавить пункт...</h2>
          <br />
          <input
            type="text"
            placeholder="Добавить"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          <br /> <br />

     
       
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
         </div>
    </div>
  );
  }
}

export default App;




