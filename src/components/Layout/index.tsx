import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

import { Grid } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <Grid>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </Grid>
);

export default Layout;
