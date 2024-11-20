import './index.css';
import LeftContent from './component/left/LeftContent';
import RightContent from './component/right/RightContent';

function App() {
  return (
    <div className="main">
      <div className= "content">
        <div className = "content-block"><LeftContent/></div>
        <div className = "content-block"> <RightContent/></div>
      </div>
    </div>
  );
}

export default App;
