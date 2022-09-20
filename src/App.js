import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
      <img className="wzgaming" src="wzgaming.png" alt="WZGAMING"/>
      <div className="space">
        <div className="txt-holder">
          Tryouts for WZG's League of Legends roster for the 2022-23 season have passed. We are pleased to announce our 2022 roster! 
          This team was selected through a rigorous tryout and interview process to ensure the players are up to our standards and 
          align with our goals. Any roster changes will be updated to our website promptly. Are you excited to see WZG's performance 
          this season? Get ready for wins because we are WIN-ZONE GAMING!
        </div>
      </div>
      <img className="roster" src="roster.png" alt="ROSTER"/>
      <img className="staff" src="staff.png" alt="STAFF"/>
    </div>
  );
}

export default App;
