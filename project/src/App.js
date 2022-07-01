import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from "./Component/Card"
function App(props) {
  return (
    <div className='container'>
     <h1 className="title">FLOWARD</h1>
     <div className="center">
     <div className='card-group'> 
      <Card card={props.cardInfo.card1}></Card>
      <Card card={props.cardInfo.card2}></Card>
      <Card card={props.cardInfo.card3}></Card>
      <Card card={props.cardInfo.card4}></Card>
      <Card card={props.cardInfo.card5}></Card>
      <Card card={props.cardInfo.card6}></Card>
      <Card card={props.cardInfo.card7}></Card>
      <Card card={props.cardInfo.card8}></Card>
      <Card card={props.cardInfo.card9}></Card>
      <Card card={props.cardInfo.card10}></Card>
      <Card card={props.cardInfo.card11}></Card>
      <Card card={props.cardInfo.card12}></Card>
     </div>
     </div>
     </div>
    
  );
}

export default App;
