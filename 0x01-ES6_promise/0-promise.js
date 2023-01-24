export default function getResponseFromAPI() {
  const myPromise = new Promise(
    (resolve) => {
      resolve('promise success');
    },
  );
  return myPromise;
}
