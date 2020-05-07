import { CLEAR_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: false,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };

    default:
      return state;
  }
};
