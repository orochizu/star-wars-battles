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
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h2">
                        {t('GAME_VIEW_HEADER')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item lg={6} md={6} xs={12}>
                    <Link to="/people">
                        <DetailsCard
                            title={t('CHOOSE_PEOPLE_TITLE')}
                            variant="resistance"
                        />
                    </Link>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Link to="/starships">
                        <DetailsCard
                            title={t('CHOOSE_SHIPS_TITLE')}
                            variant="empire"
                        />
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default StarshipsBattleView;
