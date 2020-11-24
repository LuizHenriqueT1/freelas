function registerJob(event, form) {
    event.preventDefault();

    const title = this.title.value;
    const description = this.description.value;
    const price = this.price.value;

    fetch("http://localhost:3001/api/jobs", {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            description: description,
            price: price
        })
    }).then(function (response) {
        console.log(response)
    }).catch(function (err) {
        console.log(err)
    })
        
}