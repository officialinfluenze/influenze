import './App.css';
// import Header from './components/organisms/Navbar';
import HomeScreen from './containers/home/screen';

function App() {
  return (
    <>
      <HomeScreen />
      <div>
        <Page />
        <Plans />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
