export default function (data) {
  return Object.keys(data)
    .map(key => {
      //array of object transformaiton
      return {
        id: key,
        ...data[key],
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)); //sort by date
}
