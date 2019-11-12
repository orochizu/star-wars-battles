import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const App: React.FC<AppProps> = ({ t }) => {
  return (
    <div className="App">
      <h1>{t('APP_TITLE')}</h1>
    </div>
  );
};

export type AppProps = WithTranslation;

export default withTranslation()(App);
