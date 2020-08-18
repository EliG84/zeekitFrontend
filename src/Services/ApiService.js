export const apiSearchAll = async (input) => {
  const url = `http://www.omdbapi.com/${input}&apikey=70630e18`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiGetSingleShort = async (id) => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=70630e18`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};

export const apiGetSingleLong = async (id) => {
  const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=70630e18`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data;
};
