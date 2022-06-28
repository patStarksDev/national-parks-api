document.querySelector('button').addEventListener('click', reqAPI)

async function reqAPI() {
    const state = document.querySelector('input').value

    try {
        const res = await fetch(`https://national-parks-simple-api.herokuapp.com/api/${state}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('ul').append('li') = data.forEach(e => e.park)
    } catch(err) {
        console.log(err)
    }
}