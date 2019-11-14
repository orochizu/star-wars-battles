import React from 'react';
import { Grid, Typography } from '@material-ui/core';

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

export default PeopleBattleView;
