import instance1 from "../request/config";

const url = '/home/highscore'
async function fetchHighscoreData() {
  const data = await instance1.get(url);
  return data
}

export default fetchHighscoreData