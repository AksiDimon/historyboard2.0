import { AllComponents } from './components/AllComponents';
import { Lines } from './components/Lines';
import { response } from './mock/mock';


function App() {
  return <div>
    <Lines/>
    <AllComponents 
    response= {response}
    />
  </div>;
}

export default App;
