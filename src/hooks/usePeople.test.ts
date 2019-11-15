import { renderHook } from '@testing-library/react-hooks';

import { PeopleResult, Person } from '../types';
import usePeople from './usePeople';

const mockedPeople: Person[] = [
    {
        name: 'Test Person',
        mass: 70,
    },
    {
        name: 'Test Person',
        mass: 71,
    },
    {
        name: 'Test Person',
        mass: 72,
    },
    {
        name: 'Test Person',
        mass: 73,
    },
    {
        name: 'Test Person',
        mass: 74,
    },
];

const mockedPeopleResult: PeopleResult = {
    next: null,
    results: mockedPeople,
};

describe('usePeople hook', () => {
    it('should return mocked people and call fetch one time', async () => {
        global.fetch = jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockedPeopleResult),
            }),
        );

        const { result, waitForNextUpdate } = renderHook<
            void,
            [Person[], boolean, string]
        >(() => usePeople());

        expect(result.current[0]).toEqual([]);
        expect(result.current[1]).toEqual(true);
        expect(result.current[2]).toEqual(null);

        await waitForNextUpdate();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result.current[0]).toEqual(mockedPeople);
        expect(result.current[1]).toEqual(false);
        expect(result.current[2]).toEqual(null);
    });

    it('should return error and call fetch one time', async () => {
        const errorMsg = 'error';
        const error = new Error(errorMsg);

        global.fetch = jest.fn().mockRejectedValueOnce(error);

        const { result, waitForNextUpdate } = renderHook<
            void,
            [Person[], boolean, string]
        >(() => usePeople());

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
