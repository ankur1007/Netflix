export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzc5MzhjZWY3NDgxZGY1MWI0YThkNWJhYWJkNjdkNyIsIm5iZiI6MTc1ODI2ODY2Ny43NjE5OTk4LCJzdWIiOiI2OGNkMGNmYjk4YjM4OTZlMWQ1ZTkxNzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gMcdKwRBQLAdrU-DXFQRCWlik41Itu0ypi7zFxu0m5g'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));