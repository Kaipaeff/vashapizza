/* eslint-disable import/no-unresolved */
import { RootState } from '../../store';

const selectPizzaData = (state: RootState) => state.pizza;

export default selectPizzaData;
