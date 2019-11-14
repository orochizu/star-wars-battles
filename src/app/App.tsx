import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';

import theme from '../theme';

import SelectResourceView from '../views/SelectResourceView';
import NotFoundView from '../views/NotFoundView';
import GameView from '../views/GameView';

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <EmotionProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <SelectResourceView />
                        </Route>
                        <Route path="/:resource(mass|crew)">
                            <GameView />
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
