import React, { useState } from 'react';
// import { FiMenu, FiX } from "react-icons/fi";
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button';

const Navbar = () => (
  <Styled>
    <nav className="navbar">
      <Logo />
      <Button type="primary"> Purchase Ticket</Button>
    </nav>
  </Styled>
);

const Styled = styled.div`
  .navbar {
    position: sticky;
    top: 0px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.8);
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      padding: 0 1rem;
      height: 3rem;
    }
  }

  .image {
    height: 36px;
  }

  .menu {
    color: white;
    display: none;
    cursor: pointer;
  }

  .list {
    display: flex;
    list-style: none;
  }

  .item {
    font-weight: 700;
    white-space: nowrap;
  }

  .link {
    font-size: 1rem;
    text-decoration: none;
    color: white;
    text-align: center;
    padding: 20px 0px 20px 0px;
    margin: 0px 20px;
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: transparent;
    transition: 250ms;
  }

  .link:hover {
    color: #ff2b06;
    border-color: #ff2b06;
    transition: 250ms;
  }

  @media screen and (max-width: 768px) {
    .image {
      height: 32px;
    }

    .list {
      flex-direction: column;
      top: 70px;
      right: 100%;
      width: 100%;
      position: absolute;
      transition: all 0.5s ease;
    }

    .list--active {
      right: 0px;
    }

    .menu {
      display: block;
    }

    .item {
      width: 100%;
      display: flex;
    }

    .link {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0px;
      border-width: 0px;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .link:hover {
      border-width: 0px;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export default Navbar;
