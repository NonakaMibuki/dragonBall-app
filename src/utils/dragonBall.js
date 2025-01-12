export const getAllDragonBall = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getDragonBall = async (id) => {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data = await response.json();
    return data;
};
