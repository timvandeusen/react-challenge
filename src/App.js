import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe'; 
import Portfolio from './Portfolio'; 
import Contact from './Contact'; 
import Resume from './Resume';
import Footer from '/Footer';
import ErrorBoundary from './ErrorBoundary';


const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/" exact component={AboutMe} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;