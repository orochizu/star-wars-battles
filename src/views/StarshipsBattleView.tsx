import React from 'react';

import { useTranslation } from 'react-i18next';

import { Grid, Typography } from '@material-ui/core';

import useStarships from '../hooks/useStarships';

import Link from '../components/Link';
import Layout from '../components/Layout';
import DetailsCard from '../components/DetailsCard';

const StarshipsBattleView: React.FC = () => {
    const { t } = useTranslation();

    const [starships, loading, error] = useStarships();

    console.log(starships, loading, error);

    return (
        <Layout>
            <Grid container spacing={6} justify="center">
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        {t('SHIPS_BATTLE_VIEW_HEADER')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Link to="/people">
                        <DetailsCard
                            title={t('SELECT_PEOPLE_TITLE')}
                            variant="resistance"
                        />
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/starships">
                        <DetailsCard
                            title={t('SELECT_SHIPS_TITLE')}
                            variant="empire"
                        />
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default StarshipsBattleView;
