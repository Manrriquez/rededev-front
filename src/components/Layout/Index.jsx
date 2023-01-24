import styled from '@emotion/styled';
import { Container } from '@mui/material';
import React from 'react'
import Feed from '../Feed/Index';
import Header from '../Header/Index';
import MenuLeft from '../MenuLeft/Index';
import MenuRight from '../MenuRight/Index';




const MainLayout = () => {
  return (
    <>
        <Header />
        <Container component="main" sx={{ml: 0, display: 'flex', justifyContent: 'space-between', maxWidth: '100%!important', mt: 3}}>
            <MenuRight />
            <Feed />
            <MenuLeft />
        </Container>
    </>
  )
}

export default MainLayout;