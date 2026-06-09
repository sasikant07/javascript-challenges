function asyncTask() {
  return functionA()
  .then((a) => functionB(a))
  .then((b) => functionB(b))
  .then((c) => functionB(c))
  .catch((err) => logger.error(err))
}

// convert above code to async await
async function asyncTask() {
  try {
    const a = await functionA();
    const b = await functionB(a);
    const c = await functionB(b);
    const result = await functionB(c);
    
    return result; 
  } catch (err) {
    logger.error(err);
  }
}