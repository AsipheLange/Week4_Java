function fetchUser(id) {
  return new Promise((resolve, reject) => {
    if (!id || id <= 0) {
      return reject(new Error("Invalid user ID"));
    }

    setTimeout(() => {
      resolve({
        id,
        name: "Asiphe",
        email: "langeasipe@gmail.com",
        registrationDate: new Date()
      });
    }, 1000);
  });
}

function fetchUsers() {
  return Promise.all([1, 2, 3].map(fetchUser));
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    if (!userId || userId <= 0) {
      return reject(new Error("No posts for invalid userId"));
    }

    setTimeout(() => {
      const posts = [1, 2, 3].map((n) => ({
        id: n,
        title: `This is the content of post ${n} for user ${userId}.`,
        userId,
      }));

      resolve(posts);
    }, 1000);
  });
}

async function run() {
  const user = await fetchUser(1);
  console.log("Single user:", user);

  const allUsers = await fetchUsers();
  console.log("\nAll users:", allUsers);

  console.log("\nFetching posts...");
  const posts = await fetchUserPosts(3);
  console.log(posts);
}

run();
