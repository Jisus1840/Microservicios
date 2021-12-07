import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PersonasList, PersonasInsert, PersonasUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/personas/list" exact component={PersonasList} />
                <Route path="/personas/create" exact component={PersonasInsert} />
                <Route
                    path="/personas/update/:id"
                    exact
                    component={PersonasUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App