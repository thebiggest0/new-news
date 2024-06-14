import React, { useState, useEffect } from 'react';

type Props = {
    state: any;
};

const News: React.FC<Props> = ({ state }) => {

    return (
        <section className='gap-16 bg-gray-20 py-10 md:h-5/6 w-5/6 md:pb-0 pt-24 px-10'>
            <h1>News</h1>
            <ul>
                {state.slice(0, 20).map((article: any, index: number) => {
                    return (
                        <li key={index}>
                            <h2>{article.title}</h2>
                            <p>{article.publishDate}</p>
                            <p>{article.description}</p>
                            <p>{article.category}: {article.source} {article.length}</p>
                            <a href={article.url}>Read More</a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default News;