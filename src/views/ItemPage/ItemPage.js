import * as React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { ItemTemplate, UserTemplate, InfoTemplate } from 'templates';
import { Paragraph, Section } from 'atoms';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  const { id } = useParams();

  // sync collections
  useFirestoreConnect([{ collection: 'pantry' }, { collection: 'settings' }]);

  const item = useSelector((state) => {
    if (state.firestore.data.pantry) {
      const { pantry } = state.firestore.data;
      return pantry[id];
    }
    return false;
  });

  const unitsList = useSelector((state) => {
    if (state.firestore.ordered.settings) {
      const { units } = state.firestore.ordered.settings[0];
      return units;
    }
    return [];
  });

  return (
    <UserTemplate>
      {item ? (
        <Section wrap>
          <ItemTemplate item={item} id={id} units={unitsList} />
          <InfoTemplate item={item} />
        </Section>
      ) : (
        <Paragraph>Fetching data...</Paragraph>
      )}
    </UserTemplate>
  );
};

export default ItemPage;
