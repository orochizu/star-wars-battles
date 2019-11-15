import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Fab, Grid, Typography } from '@material-ui/core';

import useStarships from '../hooks/useStarships';
import { Card, RoundStatus, Starship } from '../types';
import selectRandomCards from '../utils/selectRandomCards';

import Layout from '../components/Layout';
import GameBoard from '../components/GameBoard';

const StarshipsBattleView: React.FC = () => {
    const { t } = useTranslation();

    const [starships, loading] = useStarships();

    const [cards, setCards] = useState<{
        cardOne: Card;
        cardTwo: Card;
    }>({ cardOne: undefined, cardTwo: undefined });

    const playRound = useCallback(() => {
        const [shipOne, shipTwo] = selectRandomCards<Starship>(starships);

        setCards({
            cardOne: {
                title: shipOne.name,
                status:
                    shipOne.crew < shipTwo.crew || shipOne.crew === 'unknown'
                        ? RoundStatus.LOSE
                        : RoundStatus.WIN,
            },
            cardTwo: {
                title: shipTwo.name,
                status:
                    shipTwo.crew < shipOne.crew || shipTwo.crew === 'unknown'
                        ? RoundStatus.LOSE
                        : RoundStatus.WIN,
            },
        });
    }, [starships]);

    return (
        <Layout>
            <Grid container spacing={6} justify="center">
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        {t('SHIPS_BATTLE_VIEW_HEADER')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6} justify="center">
                <GameBoard
                    loading={loading}
                    cardOne={cards.cardOne}
                    cardTwo={cards.cardTwo}
                />
            </Grid>
            <Grid container spacing={6} justify="center">
                <Grid item xs="auto">
                    <Fab
                        variant="extended"
                        disabled={loading}
                        onClick={playRound}
                    >
                        {t('PLAY_ROUND')}
                    </Fab>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default StarshipsBattleView;
