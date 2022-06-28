document.querySelector('button').addEventListener('click', reqAPI)

async function reqAPI() {
    const state = document.querySelector('input').value

    try {
        const res = await fetch(`https://national-parks-simple-api.herokuapp.com/api/${state}`)
        const data = await res.json()

        console.log(data)

        for (i = 0; i < data.length; i++) {
            let park = data[i].park
            let ul = document.querySelector('ul')
            let li = document.createElement('li')
            ul.append(li)
            li.setAttribute('id', `${park}`)
            document.querySelector('#park').innerText = park
        }

    } catch(err) {
        console.log(err)
    }
}