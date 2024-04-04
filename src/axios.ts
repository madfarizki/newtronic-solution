import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (!error.response) {
      error = {
        status: 500,
        data: {
          message: "Server is not running",
        },
        statusText: "Internal Server Error",
      };
    } else {
      error = error.response;
    }

    return Promise.reject(error);
  }
);

export default axios;
