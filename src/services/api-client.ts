import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "3fe2b38cd80a4aa88fca9bc7fa0ef0d6",
  },
});
