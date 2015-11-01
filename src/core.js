import {List, Map, fromJS} from 'immutable';

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function next(state) {
    const entries = state.get('entries');
    return state.merge({
        vote: Map({pair: entries.take(2)}),
        entries: entries.skip(2)
    });
}

export function vote(state, item) {
    //const tally = state.getIn(['vote', 'tally'], fromJS({tally: {}}));
    //let votesForItem = tally.get(item, 0);
    //return state.mergeDeepIn(['vote'], fromJS({
    //    tally: {
    //        [item]: votesForItem + 1
    //    }
    //}));

    return state.updateIn(
        ['vote', 'tally', item],
        0,
        tally => tally + 1
    )
}