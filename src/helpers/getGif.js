export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=7lgDRy7U6pnEVOMm4EIU2qCKsX5egvca`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gits = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  
  return gits;
};
