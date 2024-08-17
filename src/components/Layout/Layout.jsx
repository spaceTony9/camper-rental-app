import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
