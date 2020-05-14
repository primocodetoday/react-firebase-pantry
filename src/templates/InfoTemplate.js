import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fieldset } from '../components/atoms';

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 25px;
  flex-basis: 400px;
`;

const StyledImage = styled.img`
  height: 250px;
  width: auto;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 50px;
`;

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
    <StyledWrapper>
      {data && !err ? (
        <div>
          <StyledImage src={data.photo} alt={name} />
          <Fieldset legend="info">{data.info}</Fieldset>
        </div>
      ) : (
        <p>Fetching data ...</p>
      )}
    </StyledWrapper>
  );
};

InfoTemplate.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InfoTemplate;
