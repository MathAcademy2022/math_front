import axios from 'axios'

export async function fetchNumbers() {
    return await axios
        .get('http://localhost:8080/new_number')
        .then((res) => res.data)
        .catch(console.log)
}

export async function postAsnwer(numbers) {
    await axios
        .post('http://localhost:8080/numbers', numbers, {
            headers: { 'Content-Type': 'application/json' },
        })
        .catch(console.log)
}


export async function fetchValidation() {
    return await axios
        .get('http://localhost:8080/result')
        .then((res) => res.data)
        .catch(console.log)
}


