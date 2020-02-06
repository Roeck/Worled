const user = {
    _id: "1",
    name: "Reed",
    email: "rons9n@gmail.com",
    picture: "https://cloudinary.com/fasff"
}

module.exports = {
    Query: {
       me: () => user 
    }
}