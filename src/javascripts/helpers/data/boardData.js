import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL BOARDS
const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getAllBoards, getSingleBoard };
