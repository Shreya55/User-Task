import { ADD_DATA, TOGGLE_DATA, UPDATE_DATA } from "./DataAction";

export const DataReducer = (state, action) => {
    switch (action.type) {
        case ADD_DATA:
          return {
            ...state,
            datas: [...state.datas, action.payload],
          };
        case TOGGLE_DATA:
          return {
            ...state,
            datas: state.datas.map((data) =>
              data.id === action.payload
                ? { ...data, show: !data.show }
                : data
            ),
          };
        case UPDATE_DATA:
            return{}
        default:
          return state;
      }
}
