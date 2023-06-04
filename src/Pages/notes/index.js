import React from 'react';
import Form from '../../components/Notes/Form';
import OtherNotes from '../../components/Notes/Other';

function NotesPage() {
  return (
    <div>
      <Form istoggleable={true} />
      <OtherNotes />
    </div>
  );
}

export default NotesPage;
