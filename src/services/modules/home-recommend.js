import instance1 from "../request/config";

const url = '/home/hotrecommenddest'
async function fetchRecommendData() {
  const data = await instance1.get(url);
  return data
}

export default fetchRecommendData