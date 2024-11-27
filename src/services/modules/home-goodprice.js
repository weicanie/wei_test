import instance1 from "../request/config";

const url = '/home/goodprice'
async function fetchGoodpriceData() {
  const data = await instance1.get(url);
  return data
}

export default fetchGoodpriceData