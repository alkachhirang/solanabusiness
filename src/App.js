
import './App.css';
import Accordiansection from './components/Accordiansection';
import Header from './components/Header';
import Imgsection from './components/Imgsection';
import Popularised from './components/Popularised';
import Redsection from './components/Redsection';
import Roadmapsection from './components/Roadmapsection';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <Popularised />
      <Imgsection />
      <Redsection />
      <Roadmapsection />
      <Team />
      <Accordiansection/>
    </>
  );
}

export default App;
