import instance1 from "../request/config";

const url = '/home/discount'
async function fetchDiscountData() {
  const data = await instance1.get(url);
  return data
}

export default fetchDiscountData
