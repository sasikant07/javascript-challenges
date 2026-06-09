class UserService {
    async getUser(id) {
      if (id === 2) {
        // Correctly rejecting
        throw '2 is rejected'; 
      }
      return {
        id,
        name: Math.random().toString(36).substring(2, 7),
      };
    }
  
    async getUsers(ids) {
      // 1. Map the IDs to an array of Promises
      const userPromises = ids.map(id => this.getUser(id));
  
      // 2. Await Promise.all so it rejects if any promise fails
      return await Promise.allSettled(userPromises);
    }
  }
  
  const user = new UserService();
  
  user
    .getUsers([1, 2, 3, 4, 5])
    .then((res) => console.log("Success:", res))
    .catch((err) => console.error("Caught in caller:", err)); 
    