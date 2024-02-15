let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let result = {...data, name: 'rizky syahputra', email: 'eky1579@gmail.com', hobby: 'Main Musik'}

let {street, city} = result.address

console.log(result)
console.log(data.address.street,city)