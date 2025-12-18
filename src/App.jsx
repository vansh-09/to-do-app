import { Header } from "./components/Header";
import Tabs from "./components/Tabs";
import ToDoInput from "./components/ToDoInput";
import ToDoCard from "./components/ToDoCard";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <p>gurt: yo</p>
      <Header />
      <Tabs />
      <ToDoInput />
      <ToDoCard />
      <ToDoList />
    </div>
  );
}
export default App;
