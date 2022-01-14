import './App.css';
import { GlobalHotKeys } from "react-hotkeys";
import confetti from "canvas-confetti";

const keyMap = {
  TypeText: {
    sequences: "c h a n g w o r k s"
  }
};

const handlers = {
  TypeText: (e) => {
    // console.log("pressed");
    confetti({
      particleCount: 300,
      spread: 150
    });
  }
};

function App() {
  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
    <div className="App">   
        <div >
          <h1 style={{fontSize:'45px'}}>Type "changworks"</h1>
        </div>     
    </div>
    </GlobalHotKeys>
  );
}

export default App;
