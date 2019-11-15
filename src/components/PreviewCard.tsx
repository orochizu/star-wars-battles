import React from 'react';

import styled from '@emotion/styled';

import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    withTheme,
} from '@material-ui/core';

const DetailsCardMedia = styled(CardMedia)`
    opacity: 0.8;
    height: 610px;
    background-size: 85%;

    @media (max-width: ${({ theme }: any) =>
            theme.breakpoints.values['md']}px) {
        height: 305px;
    }

    @media (max-width: ${({ theme }: any) =>
            theme.breakpoints.values['sm']}px) {
        height: 202.5px;
    }
`;

const PreviewCard: React.FC<DetailsCardProps> = ({
    title,
    variant,
    children,
}: DetailsCardProps) => (
    <Box height={1} width={1}>
        <Card>
            <CardHeader
                title={title}
                titleTypographyProps={{ align: 'center' }}
            />
            <DetailsCardMedia
                image={require(variant === 'resistance'
                    ? '../resistance.svg'
                    : '../empire.svg')}
            />
            <CardContent>{children}</CardContent>
        </Card>
    </Box>
);

interface DetailsCardProps {
    title?: string;
    variant: 'empire' | 'resistance';
    children?: React.ReactNode;
}

export default withTheme(PreviewCard);
