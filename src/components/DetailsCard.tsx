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

    @media (max-width: ${({ theme }: any) =>
            theme.breakpoints.values['md']}px) {
        height: 305px;
        background-size: 50%;
    }

    @media (max-width: ${({ theme }: any) =>
            theme.breakpoints.values['sm']}px) {
        height: 202.5px;
        background-size: 25%;
    }
`;

const DetailsCard: React.FC<DetailsCardProps> = ({
    title,
    variant,
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
            <CardContent></CardContent>
        </Card>
    </Box>
);

interface DetailsCardInterface {
    title?: string;
    variant: Side;
}

type Side = 'empire' | 'resistance';
type DetailsCardProps = DetailsCardInterface;

export default withTheme(DetailsCard);
