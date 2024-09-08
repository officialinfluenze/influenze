import './App.css';
import Page from './components/organisms/Services';
import Plans from './components/organisms/Plans';
import Testimonials from './components/organisms/Testimonials';
import CommonQuestions from './components/organisms/FAQ';
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
      <CommonQuestions/>
    </div>
  );
}

export default App;
