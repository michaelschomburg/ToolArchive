


export const search = q => ({
    type: 'SEARCH',
    payload: q
});


export const setSearchResult = pids => ({
    type: 'SET_SEARCH_RESULT',
    payload: pids
});