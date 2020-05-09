export default function sort(dataArray) {
  return dataArray.sort((a, b) => b.health - a.health);
}
