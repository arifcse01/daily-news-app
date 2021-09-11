import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {

    const [admin, setAdmin] = useState({});
    
    const history = useHistory();

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const handleBlur = (e) => {
        const newAdmin = admin;
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const handleAdmin = (e) => {
        e.preventDefault();
        fetch('https://infinite-badlands-26731.herokuapp.com/addAdmin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("admin added successfully");
                    history.replace('/admin');
                }
            })
    }

    return (
        <>
            {
                (signedInUser.email) ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 gy-4">
                                <Sidebar></Sidebar>
                            </div>
                            <div className="col-md-8 gx-3 gy-5">
                                <form onSubmit={handleAdmin}>
                                    <input onBlur={handleBlur} name="email" type="email" className="w-75 bg-white border p-2 rounded" placeholder="Write Email" />
                                    <input type="submit" name="name" className="btn btn-warning py-2" value="Add Admin" />
                                </form>
                            </div>
                        </div>
                    </div> : "error"
            }

        </>
    );
};

export default Admin;