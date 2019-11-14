import styled from '@emotion/styled';
import { Link as DefaultLink, LinkProps } from 'react-router-dom';

const Link = styled(DefaultLink)<LinkProps>`
    text-decoration: inherit;
    color: inherit;
`;

export default Link;
