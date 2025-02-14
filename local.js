for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Get the key name
    const value = localStorage.getItem(key); // Get the value for the key
    console.log(`${key}: ${value}`); // Log key-value pair
  }
  