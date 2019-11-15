import { renderHook } from '@testing-library/react-hooks';

import { Starship, StarshipsResult } from '../types';

import useStarships from '../hooks/useStarships';

const mockedShips: Starship[] = [
    {
        name: 'Test Ship',
        crew: 70,
    },
    {
        name: 'Test Ship',
        crew: 71,
    },
    {
        name: 'Test Ship',
        crew: 72,
    },
    {
        name: 'Test Ship',
        crew: 73,
    },
    {
        name: 'Test Ship',
        crew: 74,
    },
];

const starshipsResult: StarshipsResult = {
    next: null,
    results: mockedShips,
};

describe('usePeople hook', () => {
    it('should return mocked ships and call fetch one time', async () => {
        global.fetch = jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(starshipsResult),
            }),
        );

        const { result, waitForNextUpdate } = renderHook<
            void,
            [Starship[], boolean, string]
        >(() => useStarships());

        expect(result.current[0]).toEqual([]);
        expect(result.current[1]).toEqual(true);
        expect(result.current[2]).toEqual(null);

        await waitForNextUpdate();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result.current[0]).toEqual(mockedShips);
        expect(result.current[1]).toEqual(false);
        expect(result.current[2]).toEqual(null);
    });

    it('should return error and call fetch one time', async () => {
        const errorMsg = 'error';
        const error = new Error(errorMsg);

        global.fetch = jest.fn().mockRejectedValueOnce(error);

        const { result, waitForNextUpdate } = renderHook<
            void,
            [Starship[], boolean, string]
        >(() => useStarships());

        expect(result.current[0]).toEqual([]);
        expect(result.current[1]).toEqual(true);
        expect(result.current[2]).toEqual(null);

        await waitForNextUpdate();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result.current[0]).toEqual([]);
        expect(result.current[1]).toEqual(false);
        expect(result.current[2]).toEqual(error);
    });
});
