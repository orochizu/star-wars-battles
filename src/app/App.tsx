import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';

import theme from '../theme';

import SelectResourceView from '../views/SelectResourceView';
import StarshipsBattleView from '../views/StarshipsBattleView';
import PeopleBattleView from '../views/PeopleBattleView';
import NotFoundView from '../views/NotFoundView';

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <EmotionProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <SelectResourceView />
                        </Route>
                        <Route path="/starships">
                            <StarshipsBattleView />
                        </Route>
                        <Route path="/people">
                            <PeopleBattleView />
                        </Route>
                        <Route path="*">
                            <NotFoundView />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </EmotionProvider>
        </MuiThemeProvider>
    );
};

export default App;
