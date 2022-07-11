import { fetchNumbers, postAsnwer, fetchValidation } from "../api/Nrs"
import { useEffect, useState, useRef } from "react";


function Home() {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        fetchNumbers().then(setNumbers);
    }, []);

    let firstNr = numbers[0];
    let secondNr = numbers[1];
    const answerRef = useRef(null);

    async function validateAnswer() {

        let answer = answerRef.current.value;
        let arrayOfNumbers = numbers;
        let string = answer;
        let double = parseFloat(string);
        arrayOfNumbers.push(double);
        await postAsnwer(arrayOfNumbers);
        let result = await fetchValidation();

        // alert(result);
        if (result === double) {
            window.alert("Good job try another");
            window.location.replace("/");
        } else {
            window.alert("Give it another try");
        }

        // window.location.replace("/");
    }

    return (
        <div className="home-container">
            <h1> Hommmmmme</h1>

            <h1> {firstNr}</h1>
            <span>
                +
            </span>
            <h1>( {secondNr} )</h1>
            <span>
                <input type="number" ref={answerRef}></input>
            </span>
            <button onClick={validateAnswer}>Check answer</button>


        </div>
    )
}

export default Home;