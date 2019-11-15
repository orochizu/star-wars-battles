import React from 'react';

import { createRenderer } from 'react-test-renderer/shallow';

import GameBoard from '../components/GameBoard';

jest.mock('react-i18next', () => {
    return {
        useTranslation: () => ({
            t: (key: string) => key.toUpperCase(),
        }),
    };
});

const component = <GameBoard loading={false} />;

it('GameBoard.tsx should match snapshot', () => {
    const renderer = createRenderer();
    renderer.render(component);

    const snapshot = renderer.getRenderOutput();

    expect(snapshot).toMatchSnapshot();
});
