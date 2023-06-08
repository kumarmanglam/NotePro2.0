import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES } from './routes';
import NotesPage from '../Pages/notes';
import ArchivePage from '../Pages/archives';
import TrashPage from '../Pages/trash';

function RouterContainer() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path="/" element={<Navigate to={ROUTES.notes.pathname}/>}/>
        <Route path={ROUTES.notes.pathname} element={<NotesPage />} />
        <Route path={ROUTES.archive.pathname} element={<ArchivePage />} />
        <Route path={ROUTES.trash.pathname} element={<TrashPage />} />
      </Route>
    </Routes>
  );
}

export default RouterContainer;
