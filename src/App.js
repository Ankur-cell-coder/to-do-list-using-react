
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';


function App() {
 const  onDelete = () => {
    console.log("i am on delete")
  }
  let todos = [
    {
      sno:1,
      title:"go to market",
      desc:"you need to go to bring coke"
    },
    {
      sno:2,
      title:"go to bath",
      desc:"you need to go to fresh yourself"
    },
    {
      sno:3,
      title:"go to study",
      desc:"you need to go to get placed at google"
    }
  ]
  return (
   <>
    <Header title="My Todos List" SearchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
