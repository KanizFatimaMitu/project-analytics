import './App.css';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';

function App() {
  return (
    <div className="App">
      <div className='appGlass'>
     <SidebarMenu></SidebarMenu>
     <Charts></Charts>
     <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
