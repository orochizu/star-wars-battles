import React from 'react';

import { useTranslation } from 'react-i18next';

import { Grid, Typography } from '@material-ui/core';

import Link from '../components/Link';
import Layout from '../components/Layout';
import PreviewCard from '../components/PreviewCard';

const SelectResourceView: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <Grid container spacing={6} justify="center">
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        {t('SELECT_GAME_VIEW_HEADER')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Link to="/people">
                        <PreviewCard
                            title={t('SELECT_PEOPLE_TITLE')}
                            variant="resistance"
                        />
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/starships">
                        <PreviewCard
                            title={t('SELECT_SHIPS_TITLE')}
                            variant="empire"
                        />
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default SelectResourceView;
