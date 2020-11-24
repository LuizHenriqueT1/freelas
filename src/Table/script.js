function goHome() {
    window.location.href = "../../index.html"
}

(function() {
    fetch("http://localhost:3001/api/jobs", {
        method: 'GET',
    }).then(function (response) {
        return response.json();
    }).then(function (data) {

        recreateContentTable()

        const allJobs = data.docs

        for(const index in allJobs) {

            const {id, title, description, price } = allJobs[index]

            showjobs({title, description, price}, id)
        }
    }).catch(function (err) {
        console.log(err)
    })
})

function showJobs(job, id) {
    var tbody = document.getElementById('jobs')

    var tr =document.getElementById('jobs')

    var tr = document.createElement('tr');
    tr.setAttribute('id', id)

    for (const prop in job) {
        var td = document.createElement('td');

        td.appendChild(document.createTextNode(job[prop]));

        tr.appendChild(td);
    }

    createButtonUpdate(tr, id)
    crateButtonRemove(tr, id)

    tbody.appendChild(tr)
}

function createButtonUpdate(tr, id) {
    var buttonUpdate = document.createElement('button');

    buttonUpdate.className = 'btn btn-update'

    buttonUpdate.addEventListener('click', function() {
        const att = confirm("Você deseja atualizar o freela?")

        if(att) {
            updateJob(id)
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonUpdate);
    tr.appendChild(td);
}

function createButtonRemove(tr,id) {
    var buttonRemove = document.createElement('button');

    buttonRemove.className = 'btn btn-delete'

    buttonRemove.addEventListener('click', function() {
        const remover = confirm("Você deseja deletar o freela?");

        if(remover) {
            deleteJob(id)
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonRemove);
    tr.appendChild(td);
}

function updateJob(id) {
    window.location.href = `../Update/update.html?id=${id}`
}

function updateJob(id) {
    fetch(`http://localhost:3002/api/jobs/${id}`, {
        method: 'DELETE',
    }).then(function(data){
        console.log(data)

        const job = document.getElementById(id)

        job.remove()
    }).catch(function(err) {
        console.log(err)
    })

function recreateContentTable() {
    var element = document.getElementById('jobs');
    element.innerHTML = '';
}
}