(function() {
    const id = window.location.search.replace("?id=", '');

    fetch(`http://localhost:3001/api/jobs/${id}`, {
        method: 'GET'
    }).then(function(response) {
        return response.json()
    }).then(function(data) {

        document.getElementById("title").value = data.title;

        document.getElementById("description").value = data.description;

        document.getElementById("price").value = data.price;

    }).catch(function (err) {
        console.log(err)
    })
})()

function updateJob(event, form) {
    event.preventDefault();

    const id = window.location.search.replace("?id=", '')

    const title = this.title.value;
    const description = this.description.value;
    const price = this.price.velue;

    fetch(`htttp://localhost:3001/api/jobs/${id}`, {
        method: "PUT",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            description: description,
            price: price
        })
    }).then(function (reponse) {
        window.location.href = "../Table/table.html"
    }).catch(function (err) {
        console.log(err)
    })
}