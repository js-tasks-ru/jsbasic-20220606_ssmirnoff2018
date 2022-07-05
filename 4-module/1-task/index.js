function makeFriendsList(friends) {

  let ul = document.createElement('UL');
  let newStr = '';

  for (let name of friends) {
    newStr += '<li>' + name.firstName + ' ' + name.lastName + '</li>\n';
  }
  
  ul.insertAdjacentHTML('afterbegin', newStr);

  return ul;
}
