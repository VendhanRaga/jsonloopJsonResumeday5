//json object for loop

let json = [{
    "id" : "1", 
    "name"   : "ragavendra",
    "date&time" : "2013-05-05 23:35",
    "email": "ragaven@email.se"
},
{
    "id" : "2", 
    "name"   : "ragunatha",
    "date&time" : "2013-05-05 23:45",
    "email": "ragunath@email.se"
}];

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
}

//for in loop

var json1 = {
    jsonData:  [
        {one: [11, 12, 13, 14, 15]},
        {two: [21, 22, 23]},
        {three: [31, 32]}
    ]
 }; 
 
    for (var key in json.jsonData[i]) {
        for (var j= 0; j<json.jsonData[i][key].length; j++) {
            console.log(json.jsonData[i][key][j])
        }
    }
 
 //for of loop

 test = { first: "one"}

for(var item of test) {
  console.log(item)
}

// for each loop

JsonData:

{
"users"=[{
"id":"765",
"username":"raga",
"profileURL":"http://example.com",
"avatarURL":"http:///example.com"},
{"id":"765",
"username":"raja",
"profileURL":"http://example.com",
"avatarURL":"http://example.com"}]
}

obj.users.forEach(function(user) {
    console.log(user.username);
  });