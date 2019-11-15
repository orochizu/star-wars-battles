import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { CircularProgress, Grid, Typography } from '@material-ui/core';

import { Card } from '../types';
import { RoundStatus } from '../types';

import PreviewCard from './PreviewCard';

const defaultCard: Card = {
    title: 'NO_CARD_SELECTED',
    status: RoundStatus.WAITING,
};

const GameBoard: React.FC<GameBoardProps> = ({
    loading,
    cardOne = defaultCard,
    cardTwo = defaultCard,
}: GameBoardProps) => {
    const { t } = useTranslation();

    const [[playerOnePoints, playerTwoPoints], setPoints] = useState<
        [number, number]
    >([0, 0]);

    useEffect(() => {
        setPoints([
            cardOne.status === RoundStatus.WIN
                ? playerOnePoints + 1
                : playerOnePoints,
            cardTwo.status === RoundStatus.WIN
                ? playerTwoPoints + 1
                : playerTwoPoints,
        ]);
        // There is no need to run effect when points are changed
        // eslint-disable-next-line
    }, [cardOne, cardTwo]);

    return (
        <>
            {loading ? (
                <>
                    <Grid item xs="auto">
                        <CircularProgress size={60} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center">{t('LOADING')}</Typography>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid item xs={6}>
                        <PreviewCard
                            title={t(cardOne.title)}
                            variant="resistance"
                        >
                            <Grid container justify="center">
                                <Grid item xs="auto">
                                    <Typography variant="h4">
                                        {playerOnePoints}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </PreviewCard>
                    </Grid>
                    <Grid item xs={6}>
                        <PreviewCard title={t(cardTwo.title)} variant="empire">
                            <Grid container justify="center">
                                <Grid item xs="auto">
                                    <Typography variant="h4">
                                        {playerTwoPoints}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </PreviewCard>
                    </Grid>
                </>
            )}
        </>
    );
};

interface GameBoardProps {
    loading: boolean;
    cardOne?: Card;
    cardTwo?: Card;
}

export default GameBoard;
