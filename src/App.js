import './App.css'
import Search from './components/search/search';
import RealTimeWeather from './components/realTimeWeather/realTimeWeather';

function App() {
  const handleOnSearchChange = (searchData) => { }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <RealTimeWeather />
    </div>
  );
}

export default App;
