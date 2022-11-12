import logo from './logo.svg';
import './App.css';
import Filters from './Filters';
import ImageSlides from './components/ImageSlides';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Filters/>
      <ImageSlides/>
    </div>
  );
}

export default App;
