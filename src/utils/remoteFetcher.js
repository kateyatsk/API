const BASE_URL = "https://jsonplaceholder.typicode.com";

function toBody(response) {
  if (!response.ok) {
    throw new Error("Error with response");
  }

  return response.json();
}

export function get(endpoint) {
  return fetch(`${BASE_URL}/${endpoint}`).then(toBody);
}
