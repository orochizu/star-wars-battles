import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
    AppBar,
    FormControlLabel,
    Grid,
    Switch,
    Toolbar,
    Typography,
} from '@material-ui/core';

import Link from './Link';

const TitleBar: React.FC = () => {
    const [isEnglish, setIsEnglish] = useState(true);
    const { t, i18n } = useTranslation();

    const toggleLanguage = useCallback(
        (value: boolean) => {
            setIsEnglish(value);
            i18n.changeLanguage(isEnglish ? 'pl' : 'en');
        },
        [i18n, isEnglish],
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justify="flex-start">
                    <Grid item xs="auto">
                        <Link to="/">
                            <Typography align="center">
                                {t('APP_TITLE')}
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isEnglish}
                                    onChange={event =>
                                        toggleLanguage(event.target.checked)
                                    }
                                />
                            }
                            label={t('SWITCH_LANGUAGE')}
                            labelPlacement="start"
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TitleBar;
