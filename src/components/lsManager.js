import { v4 as uuidv4 } from "uuid";

// 1. function to get data from LS by key
// 2. function to set data from LS by key

// 1. Store data -> transfer data form create window to LS
//      a. Create uuid
//      b. Create object with new ID
//      c. Get array of exsisting objects
//      d. Add new object to array of existing objects
//      e. Set combined array to LS

function get(key) {
  const data = localStorage.getItem(key);
  // If LS is empty - return empty array, else return array of objects
  return null !== data ? JSON.parse(data) : [];
}

function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function lsStore(key, data) {
  const id = uuidv4();
  const newData = { ...data, id };
  const oldData = get(key);
  const dataToStore = [...oldData, newData];
  set(key, dataToStore);
  return id;
}

export function lsRead(key){
    return get(key)
}