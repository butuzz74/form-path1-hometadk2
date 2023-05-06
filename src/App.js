import React from "react";
import { Route, Switch } from "react-router-dom";
import StudentsList from "./components/page/StudentsList";
import AddStudentForm from "./components/page/AddStudentForm";
import EditStudentCard from "./components/page/EditStudentCard";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/add" component={AddStudentForm} />
                <Route path="/:userId" component={EditStudentCard} />
                <Route path="/" component={StudentsList} />
            </Switch>
        </div>
    );
}

export default App;
