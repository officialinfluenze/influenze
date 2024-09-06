import './App.css';
import Page from './components/organisms/Services';
import Plans from './components/organisms/Plans';
import Testimonials from './components/organisms/Testimonials';
function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Page/>
      <Plans/>
      <Testimonials/>
    </div>
  );
}

export default App;
