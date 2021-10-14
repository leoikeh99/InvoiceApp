const genId = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = Math.floor(1000 + Math.random() * 9000);

  let id = `${letters[Math.floor(Math.random() * 10)]}${
    letters[Math.floor(Math.random() * 10)]
  }${numbers}`;

  return id;
};

const getTotal = (itemList) =>
  itemList.length !== 0
    ? itemList
        .map((val) => Number(val.qty) * Number(val.price))
        .reduce((a, b) => a + b)
    : 0;

export { genId, getTotal };
