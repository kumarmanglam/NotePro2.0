import React from 'react';
import Card from '../../core/Card';
import { trashNotesSelector } from '../../../store/appselector';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useSelector } from 'react-redux';
import { PAGE_TYPE } from '../../../common/common';

function TrashNotes() {
  const trashNotes = useSelector(trashNotesSelector);
  return (
    <div className="container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1150: 4, 1500: 5 }}
      >
        <Masonry columnsCount={5} gutter="10px">
          {trashNotes.map((data) => (
            <Card
              pageType={PAGE_TYPE.TRASH}
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              backgroundColor={data.backgroundColor}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default TrashNotes;
