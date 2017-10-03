import {
  NEW_RESUME
}
from './actions';
import Resume from './resume-data';

const initialState = {
  name: Resume.name,
  email: Resume.email,
  phone: Resume.phone,
  github: Resume.github,
  address: Resume.address,
  city: Resume.city,
  state: Resume.state,
  zip: Resume.zip,
  country: Resume.country,
  experience: Resume.experience
}

export default (state, action) => {
  state = state || initialState;

  if (action.type === NEW_RESUME){
    state = Object.assign({}, initialState);
  }

  return state;
}