import React from 'react';
import Layout from '../components/Layout';

import DetailsCard from '../components/DetailsCard';
import { Grid, Typography } from '@material-ui/core';

const SelectResourceView: React.FC = () => (
    <Layout>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography align="center" variant="h2">
                    Select Resource View
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={6}>
            <Grid item lg={6} md={6} xs={12}>
                <DetailsCard
                    title="Luke Skywalker"
                    variant="resistance"
                ></DetailsCard>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
                <DetailsCard
                    title="Luke Skywalker"
                    variant="empire"
                ></DetailsCard>
            </Grid>
        </Grid>
    </Layout>
);

export default SelectResourceView;
