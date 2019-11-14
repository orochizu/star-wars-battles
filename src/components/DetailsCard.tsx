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

const DetailsCardContainer = styled(Card)`
    min-height: 21rem;
    min-width: 13rem;
`;

const DetailsCardMedia = styled(CardMedia)`
    opacity: 0.8;
    height: 610px;

    @media (min-width: ${({ theme }: any) => theme.breakpoints.values['sm']}) {
        height: 305px;

        background-size: 50%;
    }
`;

const DetailsCard: React.FC<DetailsCardProps> = ({
    title,
    variant,
}: DetailsCardProps) => (
    <Box height={1} width={1}>
        <DetailsCardContainer>
            <CardHeader
                title={title}
                titleTypographyProps={{ align: 'center' }}
            />
            <DetailsCardMedia
                image={require(variant === 'resistance'
                    ? '../resistance.svg'
                    : '../empire.svg')}
            />
            <CardContent></CardContent>
        </DetailsCardContainer>
    </Box>
);

interface DetailsCardInterface {
    title?: string;
    variant: Side;
}

type Side = 'empire' | 'resistance';
type DetailsCardProps = DetailsCardInterface;

export default withTheme(DetailsCard);
