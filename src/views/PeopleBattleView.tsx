import React, { useCallback, useState } from 'react';
import { Fab, Grid, Typography } from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import usePeople from '../hooks/usePeople';

import Layout from '../components/Layout';
import GameBoard from '../components/GameBoard';
import selectRandomCards from '../utils/selectRandomCards';
import { Card, Person, RoundStatus } from '../types';
import FixedFax from '../components/FixedFab';

const PeopleBattleView: React.FC = () => {
    const { t } = useTranslation();
    const [people, loading] = usePeople();

    const [cards, setCards] = useState<{
        cardOne: Card;
        cardTwo: Card;
    }>({ cardOne: undefined, cardTwo: undefined });

    const playRound = useCallback(() => {
        const [personOne, personTwo] = selectRandomCards<Person>(people);

        setCards({
            cardOne: {
                title: personOne.name,
                status:
                    personOne.mass < personTwo.mass
                        ? RoundStatus.LOSE
                        : RoundStatus.WIN,
            },
            cardTwo: {
                title: personTwo.name,
                status:
                    personTwo.mass < personOne.mass
                        ? RoundStatus.LOSE
                        : RoundStatus.WIN,
            },
        });
    }, [people]);

    return (
        <Layout>
            <Grid container spacing={6} justify="center">
                <Grid item xs="auto">
                    <Typography align="center" variant="h3">
                        {t('PEOPLE_BATTLE_VIEW_HEADER')}
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
            <FixedFax variant="extended" disabled={loading} onClick={playRound}>
                {t('PLAY_ROUND')}
            </FixedFax>
        </Layout>
    );
};

export default PeopleBattleView;
