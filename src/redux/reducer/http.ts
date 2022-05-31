import helpers from '../helpers';

export const initialState = {
  loading: [],
  error: {},
};

const STATES = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export default function httpReducer(state = initialState, action: { type: any, payload: any }) {
  const { type, payload } = action;
  const matches = helpers.matchType(type);

  if (!matches) {
    return state;
  }

  const [, , requestName, requestState] = matches;

  switch (requestState) {
    case STATES.REQUEST:
      return {
        ...state,
        loading: [...state.loading, requestName],
      };
    case STATES.SUCCESS:
      const error = { ...state.error };
      delete error[requestName];
      return {
        loading: state.loading.filter((e) => e !== requestName),
        error,
      };
    case STATES.ERROR:
      return {
        loading: state.loading.filter((e) => e !== requestName),
        error: {
          [requestName]: payload,
        },
      };
  }

  return state;
}
