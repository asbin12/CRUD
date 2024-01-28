import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './components/CRUD/AppRoute';

function App() {
  return (
    <>
      <Router>
        <AppRoute />
      </Router>
    </>
  );
}

export default App;