// Task 01:
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

// async function iterateWithAsyncAwait(values) {
//   for (const value of values) {
//     console.log(value);
//     await new Promise(resolve => setTimeout(resolve, 1000)); 
//   }
// }
// //Example
// const values = [1, 2, 3, 4, 5];
// iterateWithAsyncAwait(values);

// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

// function fetchDataFromAPI() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data from API');
//     }, 2000); 
//   });
// }

// // Async function to await API call and log data
// async function awaitCall() {
//   console.log('Fetching data from API...');
//   const data = await fetchDataFromAPI(); 
//   console.log('Data fetched:', data); // Log fetched data
// }

// awaitCall();



// Task 04:
// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

function fetchDataFromAPI(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data from ${url}`); 
    }, Math.random() * 2000); // Random simulated delay up to 2 seconds
  });
}

// Async function to make concurrent API requests and log combined results
async function concurrentRequests() {
  console.log('Making concurrent API requests...');
  
  // Use Promise.all() to make two API calls concurrently
  const [result1, result2] = await Promise.all([
    fetchDataFromAPI('https://fakestoreapi.com/products'),
    fetchDataFromAPI('https://fakestoreapi.com/products')
  ]);

  // Log the combined results after both requests have resolved
  console.log('Combined results:', result1, result2);
}

concurrentRequests();
