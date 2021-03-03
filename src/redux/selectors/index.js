import { createSelector } from "reselect";

const celebsSelector = state => state.celebsTable.celebs;

export default createSelector(
    celebsSelector
)