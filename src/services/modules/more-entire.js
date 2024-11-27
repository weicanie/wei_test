import instance1 from "../request/config";

async function fetchEntireData(offset) {
  let url = '/entire/list'
  const searchParams = `?offset=${offset}&size=20`
  url += searchParams
  // console.log('fetchEntireData', url)
  const data = await instance1.get(url);
  return data
}

export default fetchEntireData