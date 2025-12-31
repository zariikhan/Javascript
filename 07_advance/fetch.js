// fetch

// const api = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     //   console.log(response);
//     // let data = await response.json();
//     console.log(data[0].body);
//   } catch (error) {
//     // console.log("ERROR");
//   }
// };
// api();

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // console.log(data[0].name);
  })
  .catch((error) => {
    // console.log(error);
  });

async function apiCall() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log("ERROR");
  }
}
apiCall();

const api = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    let data = await response.json();
    const title = data.map((tit, ind) => {
      return `${ind} = ${tit.title}`;
    });
    // console.log(title);
    // console.log(data[0]);
  } catch (error) {
    console.log("ERROR");
  }
};
api();

const posts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    let data = await response.json();
    let id = data
      .filter((id) => {
        return id.userId === 1;
      })
      .map((title) => {
        return title.title;
      });
    // console.log(id);
    //   console.log(data);
  } catch (error) {
    // console.log("ERROR");
  }
};
posts();

const post = async () => {
  console.log("Loading....");
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Network response is not ok");
    }
    let data = await response.json();
    let title = data.map((element) => {
      return element.title;
    });
    console.log(title);
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
post();
