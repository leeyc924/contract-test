import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import ListPage from './ListPage';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/list" element={<ListPage />} />
      <Route path="*" element={<Navigate replace to="/list" />} />
    </ReactRoutes>
  );
};
