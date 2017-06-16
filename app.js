
let superData = [
  { name: 'Green Arrow', number: "555-1209", comic: "DC", photo_url: "http://img.cinemablend.com/cb/d/2/f/f/4/a/d2ff4a4b810264b39408e2c6d81b28b4f95225a1703be33db5ed9dbd27551930.jpg" },
  { name: 'Colossus', number: "555-2224ski", comic: "Marvel", photo_url: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ultimate_Colossus.jpg" },
  { name: 'Aquaman', number: "555-0945", comic: "DC", photo_url: "http://cdn-media.hollywood.com/images/638x425/3405532.jpg" },

]

angular.module("superApp", [])

angular
  .module("superApp", [])
  .controller("superController", [
    superControllerFunction
  ])

  function superControllerFunction () {
  this.super = superData
  this.addSuper = function(){
let superAdd = {name: this.newSuper.name,  number: this.newSuper.number, comic: this.newSuper.comic, photo_url: this.newSuper.photo_url}
this.super.push(superAdd)
    this.searchText = element(by.model('searchText'));

};
}
