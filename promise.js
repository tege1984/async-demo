const p = new Promise((resolve, reject) => {
  // kick off some asych operation
  setTimeout(() => {
    resolve(1); // pending => resolved, fullfilled
    reject(new Error("messsage")); // pending => rejected
  }, 2000);
});

p.then(res => console.log(res)).catch(err => console.log(err.message));
