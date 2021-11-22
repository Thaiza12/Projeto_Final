import{BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import AppRoutes from './routes';


function App() {
  return (
    <BrowserRouter >
      <Header/>
   <AppRoutes/>
    </BrowserRouter>
    
  );
}

export default App;
