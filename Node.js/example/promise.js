const condition = true;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("성공");
    } else {
        reject("실패");
    }
}).then((message) => {
    console.log("success: " + message);
}).catch((error) => {
    console.log("fail: " + error);
}).finally(() => {
    console.log("무조건");
});