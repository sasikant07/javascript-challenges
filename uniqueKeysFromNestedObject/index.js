// How to get the unique key from a nested object.

function getUniqueKeys(obj) {
    let keys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);

            if (typeof obj[key] === "object" && obj[key] !== null) {
                const nestedKeys = getUniqueKeys(obj[key]);
                keys = keys.concat(nestedKeys);
            }
        }
    }

    return [... new Set(keys)];
}

const nestedObject = {
    key1: "value1",
    key2: {
        nestedKey1: "value2",
        nestedKey2: "value3",
    },
    key3: {
        nestedKey3: {
            deeplyNestedKey: "value4"
        }
    }
};

const uniqueKeys = getUniqueKeys(nestedObject);
console.log(uniqueKeys);  // ['key1', 'key2', 'nestedKey1', 'nestedKey2', 'key3', 'nestedKey3', 'deeplyNestedKey']