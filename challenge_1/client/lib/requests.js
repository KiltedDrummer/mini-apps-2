import axios from 'axios';

export const searchByDate = (date) => {
  axios(`/events/?date=${date}`)
    .then(results => {
      this.setState
    })
}