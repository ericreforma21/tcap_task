import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { setCurrentPage, activePage as currentUrl, authPageHeight } from '../../store/Page/Page.slice';
import { changeURL } from '../../utils/helper'
import TCAPLogoSRC from '../../assets/tcap_logo.svg';
import { 
  BGContainer,
  Container,
  TCAPlogo,
  Wrapper
} from './AuthPage.style';

const AuthPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const activeUrl = useSelector(currentUrl)
  const wrapperHeight = useSelector(authPageHeight);
  const currentURLlocation = location?.pathname;
  const [activePage, setActivePage] = useState(currentURLlocation);
  const [pageChanged, setPageChanged] = useState(false);

  const setPage = (title, page) => {
    dispatch(setCurrentPage(page));
    changeURL(title, page);
    setPageChanged(true);
  }

  useEffect(() => {
    dispatch(setCurrentPage(location?.pathname))
  }, []);

  useEffect(() => {
    setActivePage(location?.pathname);
  }, [location]);

  useEffect(() => {
    setActivePage(pageChanged ? activeUrl : currentURLlocation)
  }, [activeUrl])

  return (
    <BGContainer>
      <Container activePage={activePage}>
        <TCAPlogo src={TCAPLogoSRC} alt="TCAP"/>
        <Wrapper activePage={activePage} height={wrapperHeight}>
          <Login setPage={setPage}/>
          <Register setPage={setPage}/>
        </Wrapper>
      </Container>
    </BGContainer>
  )
}

export default AuthPage;