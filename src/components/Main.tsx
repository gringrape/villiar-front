import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductListPage from './ProductListPage';
import ProductItemPage from './ProductItemPage';
import ReservePage from './ReservePage';

const Layout = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  return (
    <Layout>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/:id/reserve" element={<ReservePage />} />
          <Route path="/:id" element={<ProductItemPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}
