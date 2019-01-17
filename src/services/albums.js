import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchAlbumList = () => {
  return axios.get(`${API_BASE_URL}/albums`)
    .then(response => response.data);
};

// =================================
// Alexa code
// =================================
export const fetchAlbum = async (id) => {
  let datas = await axios.get(`${API_BASE_URL}/albums/${id}/photos`)
  console.log("GGGGGGGG", datas.data[3].url)
  return datas.data.filter((photo) => photo.albumId == id)
};
export const fetchPhoto = async (id) => {
  let datas = await axios.get(`${API_BASE_URL}/albums/${id}/photos`)
  console.log("clclclclclclcllclclclcllclclclcllc", datas.data)
  return datas.data[id].url
};


