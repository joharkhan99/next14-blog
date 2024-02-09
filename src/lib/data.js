// temp data
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
];
const posts = [
  {
    id: 1,
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    userId: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

export const getPosts = () => {
  return posts;
};

export const getPost = (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = (id) => {
  return users.find((user) => user.id === parseInt(id));
};
