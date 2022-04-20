// import axios from "axios";

// export const baseUrl = "https://bayut.p.rapidapi.com";

// export const fetchApi = async (url) => {
//   const { data } = await axios.get(
//     (url,
//     {
//       headers: {
//         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//         "X-RapidAPI-Key": "183b5bdd1dmsh2c4c89955de0a3ep177854jsnd27bb45695a1",
//       },
//     })
//   );
// };

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "183b5bdd1dmsh2c4c89955de0a3ep177854jsnd27bb45695a1",
    },
  });

  return data;
};
