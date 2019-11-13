import React from 'react';

import styled from '@emotion/styled';

import Container from '@material-ui/core/Container';

const LayoutContainer = styled(Container)`
    padding: 1rem;
`;

const Layout: React.FC = ({ children }) => (
    <LayoutContainer maxWidth="lg">{children}</LayoutContainer>
);

export default Layout;
