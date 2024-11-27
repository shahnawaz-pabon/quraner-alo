import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';
import { DoorOpen, DoorClosed } from '@styled-icons/fa-solid';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
  }

  .sideBarUL .item > a:hover {
    background-color: #1ed3c6;
    color: #fff !important;

    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 250px;
  transition: transform 0.3s ease;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};

  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    z-index: 100;
  }
`;

const RightSideBarWidth = styled('div')`
  width: 200px;
`;

const SidebarContainer = styled('div')`
  width: 250px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};

  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    z-index: 100;
  }
`;


const ToggleIcon = styled('div')`
  position: absolute;
  top: 0px;
  right: -42px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  z-index: 200;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Layout = ({ children, location }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (<ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <SidebarContainer isVisible={sidebarVisible}>
          <ToggleIcon onClick={toggleSidebar}>
            {sidebarVisible ? <DoorClosed size={20} /> : <DoorOpen size={20} />}
          </ToggleIcon>
          <Sidebar location={location} />
        </SidebarContainer>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>)

};

export default Layout;
