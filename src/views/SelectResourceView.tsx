import React from 'react';

import { useTranslation } from 'react-i18next';

import { Grid, Typography } from '@material-ui/core';

import Link from '../components/Link';
import Layout from '../components/Layout';
import DetailsCard from '../components/DetailsCard';

const SelectResourceView: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        {t('CHOSE_CHAMP_TYPE_VIEW_HEADER')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
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
                            title={t('CHOOSE_STARSHIPS_TITLE')}
                            variant="empire"
                        />
                    </Link>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default SelectResourceView;
