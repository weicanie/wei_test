import instance1 from "../request/config";

const url = '/home/longfor'
async function fetchLongforData() {
  const data = await instance1.get(url);
  return data
}

export default fetchLongforData
