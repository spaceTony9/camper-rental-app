import Layout from './components/Layout/Layout.jsx';
import { Navigate, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';

const App = () => {
  return (
    <Layout>
      <Routes forceRefresh={true}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
