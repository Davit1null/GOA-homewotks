// 1
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log("User Names:");
    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData();

// 2
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://invalid-api-link.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Custom Error: Failed to fetch data. Please check the API link.");
  }
}

fetchWithErrorHandling();

// 3
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Data fetched successfully:", data);
      return data;
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed. Retrying...`);
      if (i === retries - 1) {
        console.error("All retries failed:", error);
        throw error;
      }
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/users");

// 4
async function sequentialRequests() {
  try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();
    const firstPost = posts[0];

    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${firstPost.userId}`);
    const author = await authorResponse.json();

    console.log("First Post:", firstPost.title);
    console.log("Author:", author.name);
  } catch (error) {
    console.error("Error fetching sequential data:", error);
  }
}

sequentialRequests();

