import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>My React App</h1>
        </div>
    )

}

// const ReactElement ={
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit Google'

// }

// const anotherElement = (
//     <a href="https://www.google.com" target="_blank">Click me to visit Google</a>
// )

const anotherUser = "Chai or code"
const ReactElement = React.createElement('a',
     { href: 'https://www.google.com',
         target: '_blank' },
          'Click me to visit Google',
          anotherUser
        )

ReactDOM.createRoot(document.getElementById('root')).render(
 
    ReactElement
)
