import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Fieldset } from 'atoms';
import { Image, Wrapper } from './styles/StyledInfoTemplate';

const InfoTemplate = ({ item }) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();

  const { name } = item;

  useEffect(() => {
    const API = `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Bad Request');
      })
      .then((response) => response.json())
      .then((result) => {
        setData({
          info: result.extract,
          photo: result.thumbnail.source,
        });
        setErr(false);
      })
      // eslint-disable-next-line no-console
      .catch(() => setErr(true));
  }, [name]);

  return (
    <Wrapper>
      {data && !err ? (
        <>
          <Image src={data.photo} alt={name} />
          <Fieldset legend="info">{data.info}</Fieldset>
        </>
      ) : (
        <p>Fetching data ...</p>
      )}
    </Wrapper>
  );
};

InfoTemplate.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InfoTemplate;
