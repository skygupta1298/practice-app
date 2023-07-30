import ExpenseItem from "./Components/ExpenseItem";

function App() {
  return (
    <div>
      <ExpenseItem date={new Date(2022,5,3)} title="Fuck off" price={500}></ExpenseItem>
      <ExpenseItem date={new Date(2022,5,3)} title="Fuck off" price={500}></ExpenseItem>
      <ExpenseItem date={new Date(2022,5,3)} title="Fuck off" price={500}></ExpenseItem>
      <ExpenseItem date={new Date(2022,5,3)} title="Fuck off" price={500}></ExpenseItem>
    </div>
  );
}

export default App;
