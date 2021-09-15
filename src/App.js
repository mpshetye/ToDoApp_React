import Header from "./views/header";
import AddTask from "./views/addTask";
import TaskComponent from "./views/taskComponent";
import {footer as Footer} from "./views/footer";


function App() {
  return (
    <>
    <Header/>
    <AddTask/>
    <TaskComponent/>
    <Footer/>
    </>
  );
}

export default App;
