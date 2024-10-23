import { useState } from "react";

function Form() {

    const [inputTextTitle, setInputTextTitle] = useState("");
    const [inputTextBody, setInputTextBody] = useState("");
    const [inputTextUserId, setInputTextUserId] = useState("");

    // async function sendData() {
    //     let obj = {
    //         title: inputTextTitle,
    //         body: inputTextBody,
    //         userId: inputTextUserId
    //     }

    //     console.log(obj)

    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify(obj),
    //         headers: {
    //           'Content-type': 'application/json; charset=UTF-8',
    //         },
    //       }).then((response) => response.json()).then((json) => console.log(json));
    // }

    async function sendData(e: any) {
        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(formData)
        console.log(Object.fromEntries(formData))
        formData.append("name", "Hanna");
        console.log(Object.fromEntries(formData))
        formData.delete("name");
        console.log(Object.fromEntries(formData))

        console.log(formData.has("title"))   

            // fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     body: JSON.stringify(Object.fromEntries(formData)),
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8',
            //     },
            // }).then((response) => response.json()).then((json) => console.log(json));
    }


    return ( 
        <form onSubmit={(e) => sendData(e)}>
            <input onChange={(e) => setInputTextTitle(e.target.value)} value={inputTextTitle} name="title" placeholder="title" type="text" />
            <input onChange={(e) => setInputTextBody(e.target.value)} value={inputTextBody} name="body" placeholder="body" type="text" />
            <input onChange={(e) => setInputTextUserId(e.target.value)} value={inputTextUserId} name="userId" placeholder="userId" type="number" />
            <button type="submit">Отправить</button>
        </form>
     );
}

export default Form;