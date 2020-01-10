const blogs = [
  {
    title: "testing blogs",
    author: " tester",
    url: "www.test.com",
    likes: 43,
    user: [
      {
        username: "iamkiko",
        name: "Christos",
        id: "3298sdusjkdh4438al"
      }
    ],
    id: "5djncksvoe73oifbneus"
  },
  {
    title: "Test number 2",
    author: "mrs test",
    url: "www.testagain.com",
    likes: 45,
    user: [
      {
        username: " TESTER",
        name: "TEST",
        id: "89374"
      }
    ],
    id: "8749s63"
  }
]

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, setToken, blogs }
