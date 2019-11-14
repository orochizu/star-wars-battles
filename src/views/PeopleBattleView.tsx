import React from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import { useTranslation } from 'react-i18next';

import usePeople from '../hooks/usePeople';

import Link from '../components/Link';
import Layout from '../components/Layout';
import DetailsCard from '../components/DetailsCard';

const PeopleBattleView: React.FC = () => {
    const { t } = useTranslation();

    const [people, loading, error] = usePeople();

    console.log(people, loading, error);

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
                {loading ? (
                    <>
                        <Grid item xs="auto">
                            <CircularProgress size={60} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center">
                                {t('LOADING')}
                            </Typography>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item xs={6}>
                            <Link to="/people">
                                <DetailsCard
                                    title={t('CHOOSE_PEOPLE_TITLE')}
                                    variant="resistance"
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/starships">
                                <DetailsCard
                                    title={t('CHOOSE_SHIPS_TITLE')}
                                    variant="empire"
                                />
                            </Link>
                        </Grid>
                    </>
                )}
            </Grid>
        </Layout>
    );
};

export default PeopleBattleView;
