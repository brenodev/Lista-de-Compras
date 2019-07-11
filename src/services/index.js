import axios from 'axios'

export const services = {
  getImages : (product) => {
    const params = {
      key:' AIzaSyDqvMoyjezocVXH78bckqbFCWjt-4EoKMw',
      cx:'010412471266396366520:5gs4bhql_km',
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product
    }

    return axios.get('https://www.googleapis.com/customsearch/v1', { params})
    .then(resp => resp.data.items[0].link)
    .catch(err => err);
  }
 }