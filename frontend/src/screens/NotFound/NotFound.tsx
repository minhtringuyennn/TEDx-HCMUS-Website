import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'components/Logo';

const NotFound = () => {
  const { t } = useTranslation('not-found');
  return (
    <Container>
      <Logo />
      <h2>{t('title')}</h2>
      <Link to="/" replace>
        {t('home-link-caption')}
      </Link>
    </Container>
  );
};

export default NotFound;

const Container = styled.section`
  ${({ theme }) => theme.utils.centerFlex};
  flex-direction: column;
  height: 100%;
  h2 {
    font-size: 4rem;
    margin: 10px;
  }

  a {
    font-size: 2rem;
  }
`;
