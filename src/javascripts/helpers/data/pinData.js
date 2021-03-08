import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL PINS
const getAllPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SPECIFIC PINS
const getAssociatedPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${boardId}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getAllPins, getAssociatedPins };
