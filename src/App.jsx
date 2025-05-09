// App.jsx
import { Routes, Route } from 'react-router-dom';
import './styles/style.css'
import './App.css';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Layout from './Layout';
import Article from './page/Article';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default page / */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
