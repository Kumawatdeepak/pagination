import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Pagination from '../pagination/pagination';

const Issues = () => {
    const [myPost, setPost] = useState([]);
    const [showPerpage, setPerpage] = useState(4);
    const [myPage, setPage] = useState({
        start: 0,
        end:showPerpage
    });

    useEffect(() => {
        if (myPost.length < 1) {
            getPost();
        }
    }, []);


    const getPost = async () => {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(URL);
        console.log('response = ', response);
        const data = await response.json();
        console.log('datas = ', data);
        setPost(data)

    }

    const onPageChange = (start, end)=>{
        setPage({
            start: start,
            end:end
        })
    } 

    return (
        <div>
            <div className="container">
                {myPost.slice(myPage.start, myPage.end).map((post) => {
                        return <>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">#{post.id} {post.title}</h4>
                                    <p className="card-text">{post.body}</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </>
                    })
                }
                <Pagination 
                    showPerPage= { showPerpage } 
                    onPageChange={ onPageChange }/>
            </div>

        </div>
    )
}

export default Issues
