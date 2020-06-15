
import MENUITEMS from '../../DATA/dataApi';

const initialState = {
    avilableProducts: MENUITEMS,
    userProducts: MENUITEMS,
};

export default (state = initialState, action) => {
    return state;
}