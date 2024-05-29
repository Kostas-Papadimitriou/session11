import axios from "axios";

const API_KEY = "AIzaSyBjtsn6M3QsaWZRN5G8v5O0Aa18gh6Sv7Y";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureTokem: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser({ email, password }) {
  return authenticate("signUp", email, password);
}

export function login({ email, password }) {
  return authenticate("signInWithPassword", email, password);
}
