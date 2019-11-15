import React from 'react';

import { createRenderer } from 'react-test-renderer/shallow';

import PreviewCard from '../components/PreviewCard';

const component = <PreviewCard variant="empire" />;

it('PreviewCard.tsx should match snapshot', () => {
    const renderer = createRenderer();
    renderer.render(component);

    const snapshot = renderer.getRenderOutput();

    expect(snapshot).toMatchSnapshot();
});
