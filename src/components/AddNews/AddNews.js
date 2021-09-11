import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddNews = () => {
    const [newNews, setNewNews] = useState({});

    const history = useHistory();

    const handleOnBlur = (e) => {
        const addNewNews = newNews;
        addNewNews[e.target.name] = e.target.value;
        setNewNews(addNewNews);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://infinite-badlands-26731.herokuapp.com/addNews', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newNews)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("News Added Successfully");
                history.replace("/");
            }
        })
        console.log(newNews)
    }
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-3 gy-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 gy-4">
                    <form onSubmit={handleSubmit} className='shadow p-3 rounded bg-gray'>
                        <h4>Add News</h4>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="img" type="text" placeholder='Upload Image URL' />
                        </div>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="title" type="text" placeholder='Write News Title' />
                        </div>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="author" type="text" placeholder='Write Author Name' />
                        </div>
                        <div>
                            <textarea onBlur={handleOnBlur} className="form-control mt-3" name="description" type="text" placeholder="Description" />
                        </div>
                        <div>
                            <input onBlur={handleOnBlur} className="form-control mt-3" name="category" type="text" placeholder='Write Category' />
                        </div>
                        <div>
                            <input className="btn btn-success mt-2" name="name" type="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNews;