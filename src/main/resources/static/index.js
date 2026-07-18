// alert("VERY GOOD WELOME!");
console.log("hello  from js")

var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "img" : "jane.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id+1)%2
    var userImage = document.getElementById("img");
    userImage.src = users[id].img;

    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;
    
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;
    
}

function randomUser(){
    fetch('https://randomuser.me/api')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        var userdata = data.results[0];
        var userImage = document.getElementById("img");
        userImage.src = userdata.picture.large

        var userName = document.getElementById("user-name");
        userName.innerHTML = userdata.name.first + " " + userdata.name.last;
    
        var userGender = document.getElementById("user-gender");
        userGender.innerHTML = userdata.gender;
    })
    .catch(function(err){
        console.log(error);
    })
}
