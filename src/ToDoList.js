import { Component } from "react";


export class ToDoList extends Component {
   state = {
    userInput: "",
    groceryList: []
   }


   onChangeInput(e) {
    this.setState ({userInput: e})
}

addItem (input) {
     if (input === '') {
        alert ('Введите задачу')
    }
    else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''});
}
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}


deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState ({groceryList: listArray});
}


render() {
    return (
    <div>
        <div className="inputAdd">
        <div>
            <input type="text" placeholder="" 
            onChange={(e) => {this.onChangeInput(e.target.value)}}
            value = {this.state.userInput}></input>
        </div> 

        <div>
            <button className="BtnAdd" onClick={() => this.addItem(this.state.userInput)}>➕</button>
        </div>
        </div>
        <div className="listUl">
            <ul>
                {this.state.groceryList.map ((item, index) => 
                (<li onClick={this.crossedWord} key={index}>{item}</li>))}
            </ul>
        </div>


    <div className="delete">
        <button className="BtnDelete" onClick={() => this.deleteItem()}>Удалить</button>
    </div>

    </div>
)
}

}
