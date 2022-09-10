import axios from "axios";

const BASE_URL = "https://api.stackexchange.com";

export const getRequest = () =>
  new Promise((resolve, reject) => {
    axios
      .get(
        `${BASE_URL}/2.2/tags?order=desc&sort=popular&site=stackoverflow&pagesize=10`
      )
      .then((response) => resolve(response))
      .catch((error) => reject(error.message));
  });
