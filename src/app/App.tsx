import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'emotion-theming';

import theme from '../theme';

import SelectResourceView from '../views/SelectResourceView';
import StarshipsBattleView from '../views/StarshipsBattleView';
import PeopleBattleView from '../views/PeopleBattleView';
import NotFoundView from '../views/NotFoundView';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default App;
