const Url = 'https://api.github.com/users/rmaughan93/repos'

fetch(Url)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})