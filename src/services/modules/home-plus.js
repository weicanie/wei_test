import instance1 from "../request/config";

const url = '/home/plus'
async function fetchPlusData() {
  const data = await instance1.get(url);
  return data
}

export default fetchPlusData