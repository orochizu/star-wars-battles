import React from 'react';

import styled from '@emotion/styled';

import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from '@material-ui/core';

const DetailsCardContainer = styled(Card)`
    min-height: 21rem;
    min-width: 13rem;
`;

const DetailsCardMedia = styled(CardMedia)`
    height: 600px;
    opacity: 0.8;
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

export default DetailsCard;
