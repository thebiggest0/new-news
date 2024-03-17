import React, { useState, useEffect } from 'react';

// Removed type Props = {} since it's not used in this example

const News = () => {
    // let [state, setState] = useState({ message: '' }); // Initialize state as an object with a message property

    // useEffect(() => {
    //     // fetch data on component mount
    //     getNews();
    // }, []); // Added an empty dependency array to ensure this effect runs only once on component mount

    // let getNews = async () => {
    //     let response = await fetch('/api/hello/');
    //     let data = await response.json();
    //     setState(data); // Directly setting the state with the fetched object
    // }

    let [state, setState] = useState([]);
    useEffect(() => {
        getNews();
    }, []);

    let getNews = async () => {
        let response = await fetch('/api/news/')
        let data = await response.json();
        setState(data);
    }

    return (
        // <div>{state.message}</div> // Rendering the message property of the state
        <section className='gap-16 bg-gray-20 py-10 md:h-5/6 md:pb-0 pt-20 px-10'>
            <h1>News</h1>
            <ul>
                {state.slice(0, 5).map((article: any, index: number) => {
                    return (
                        <li key={index}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default News;
