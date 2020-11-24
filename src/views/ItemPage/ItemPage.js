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
    const { pantry } = state.firestore.data;
    return pantry ? pantry[id] : null;
  });

  const units = useSelector((state) => {
    const { settings } = state.firestore.ordered;
    return settings ? settings[0].units : null;
  });

  return (
    <UserTemplate>
      {item ? (
        <Section wrap>
          <ItemTemplate item={item} id={id} units={units} />
          <InfoTemplate item={item} />
        </Section>
      ) : (
        <Paragraph>Fetching data...</Paragraph>
      )}
    </UserTemplate>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   const { id } = ownProps.match.params;
//   const { pantry } = state.firestore.data;
//   const item = pantry ? pantry[id] : null;
//   // extracting Select options
//   const { settings } = state.firestore.ordered;
//   const units = settings ? settings[0].units : null;

//   return {
//     item,
//     units,
//   };
// };

export default ItemPage;
