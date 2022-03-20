const registerState = {
  dataRegist: {},
  results: {},
  message: '',
  isError: false,
  isLoading: false
}

export const registerUser = (state = registerState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING': {
      state.isError = false;
      state.message = '';
      state.dataRegist = {}
      state.isLoading = true;
      return { ...state }
    }
    case 'REGISTER_FULFILLED': {
      const {data} = action.payload
      state.isError = false;
      state.isLoading = false;
      state.results = data;
      return { ...state };
    }
    case 'REGISTER_REJECTED': {
      const { message } = action.payload.response.data;
      state.isLoading = false;
      state.isError = true;
      state.message = message;
      return { ...state };
    }
    case 'ADD_DATA_REGIST': {
      const { dataRegist } = action.payload;
      state.dataRegist = dataRegist;
    }
    default: {
      return { ...state };
    }
  }
}

const loginState = {
  results: {},
  token: null,
  isLoading: false,
  isError: false
}

export const login = (state = loginState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      state.isError = false;
      state.token = null;
      state.isLoading = true;
      return { ...state };
    }
    case 'LOGIN_FULFILLED': {
      const { data } = action.payload
      state.token = data.results.token;
      state.isError = false;
      state.isError = false;
      window.localStorage.setItem('token', state.token);
      return { ...state };
    }
    case 'LOGIN_REJECTED': {
      state.isLoading = false;
      state.token = null;
      state.isError = true;
      return  { ...state };
    }
    case 'USER_PROFILE_PENDING': {
      state.isLoading = true;
      state.isError = false;
      return { ...state };
    }
    case 'USER_PROFILE_FULFILLED': {
      const { data } = action.payload
      state.isError = false;
      state.isLoading = false;
      state.results = data.results;
      return { ...state }
    }
    case 'USER_PROFILE_REJECTED': {
      state.isError = true;
      state.isError = false;
      state.results = {}
      return { ...state };
    }
    default: {
      return  { ...state };
    }
  }
}

// export default registerUser;