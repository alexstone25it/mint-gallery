import axios from "axios";

const Axios = axios.create({
  baseURL: "https://mint-gallery.firebaseio.com/"
});

export default Axios;
