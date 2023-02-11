import './App.css';
import Charts from './Components/Charts/Charts';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';

function App() {
  return (
    <div className="App">
      <div className='appGlass'>
     <SidebarMenu></SidebarMenu>
     <Charts></Charts>
      </div>
    </div>
  );
}

export default App;
