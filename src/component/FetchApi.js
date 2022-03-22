import React  from 'react';
function FetchAPI() {

    const apiGet = () {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
        .then(json => console.log(json))
    
}

        return(<div>
            My API
            <button onClick= {apiGet}>Fetch API</button>
            </div>
    )
}
export default FetchAPI