import React from 'react';

import { createRenderer } from 'react-test-renderer/shallow';
import TitleBar from '../components/TitleBar';

jest.mock('react-i18next', () => {
    return {
        useTranslation: () => ({
            t: (key: string) => key.toUpperCase(),
        }),
    };
});

const component = <TitleBar />;

it('TitleBar.tsx should match snapshot', () => {
    const renderer = createRenderer();
    renderer.render(component);

    const snapshot = renderer.getRenderOutput();

    expect(snapshot).toMatchSnapshot();
});
