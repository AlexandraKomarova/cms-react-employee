import React from "react";

export default function ClassromTable(props) {
    return (
        <div>
            <button onClick={() => props.showTAs()}>Show TAs</button>
            <button onClick={() => props.showStudents()}>Show Students</button>
            <button onClick={() => props.showInstructor()}>Show Instructor</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.classroom.map(row =>(
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.role}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}