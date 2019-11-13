import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SelectResourceView from '../views/SelectResourceView';
import NotFoundView from '../views/NotFoundView';
import GameView from '../views/GameView';

const App: React.FC = () => {
    return (
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
    );
};

export default App;
