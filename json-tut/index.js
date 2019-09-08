const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText);
    const people = response.people;
    let output = '';
    for (let i = 0; i < people.length; i++) {
      output += `<li>${people[i].name}</li>`;
    }
    document.getElementById('root').innerHTML = output;
  }
};
xhttp.open("GET", "people.json", true);
xhttp.send();