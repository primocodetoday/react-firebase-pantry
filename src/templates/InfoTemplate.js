import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fieldset } from '../components/atoms';

const InfoWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 25px 25px 0;
  flex-basis: 400px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    padding: 10px 10px 0;
    width: 100%;
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  height: auto;
  max-width: 50%;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    margin: 0 auto 20px;
    max-width: 80%;
  }
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
    <InfoWrapper>
      {data && !err ? (
        <>
          <StyledImage src={data.photo} alt={name} />
          <Fieldset legend="info">{data.info}</Fieldset>
        </>
      ) : (
        <p>Fetching data ...</p>
      )}
    </InfoWrapper>
  );
};

InfoTemplate.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InfoTemplate;
