import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filters';
import ImageSlides from './ImageSlides';


function App() {
  return (
    <div className="App">
      <Filters/>
      <ImageSlides/>
    </div>
  );
}

export default App;
