export default function signUpUser(firstName, lastName) {
  const myPromise = new Promise((resolve, reject) => {
    resolve(
      { firstName, lastName },
    );
  });
  return myPromise;
}
