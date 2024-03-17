// import React, { useState, useEffect } from 'react';

// type Props = {}

// const Filter = (props: Props) => {
//     let [state, setState] = useState([]);
//     useEffect(() => {
//         getNews(category);
//     }, []);

//     let getNews = async (category: any) => {
//         let response = await fetch(`/api/news/${category}`)
//         let data = await response.json();
//         setState(data);
//     }


//     return (
//         <section className='px-20'>
//             <ul>
//                 <li className='mt-12 lg:mt-8'>
//                     <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200'>Category</h5>
//                     <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
//                         <li><a onClick={getNews('business')}
//                         className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300' href="">
//                             Business</a></li>
//                         <li><a className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300' href="">
//                             Sports</a></li>
//                         <li><a className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300' href="">
//                             Technology</a></li>
//                         <li><a className='block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300' href="">
//                             World</a></li>
//                     </ul>
//                 </li>
//             </ul>
//         </section>
//     )
// }

// export default Filter

import React, { useState } from 'react';

type Props = {};

const Filter: React.FC<Props> = (props) => {
    let [state, setState] = useState([]);

    let getNews = async (category: string) => {
        let response = await fetch(`/api/news/${category}`);
        let data = await response.json();
        setState(data);
        console.log(data)
    };

    const handleCategoryClick = (category: string) => (event: React.MouseEvent) => {
        event.preventDefault(); // Prevents default anchor action
        getNews(category);
    };

    return (
        <section className='px-20'>
            <ul>
                <li className='mt-12 lg:mt-8'>
                    <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200'>Category</h5>
                    <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
                        <li>
                            <a onClick={handleCategoryClick('business')} href="#" className='block ...'>
                                Business
                            </a>
                        </li>
                        <li>
                            <a onClick={handleCategoryClick('sports')} href="#" className='block ...'>
                                Sports
                            </a>
                        </li>
                        <li>
                            <a onClick={handleCategoryClick('technology')} href="#" className='block ...'>
                                Technology
                            </a>
                        </li>
                        <li>
                            <a onClick={handleCategoryClick('world')} href="#" className='block ...'>
                                World
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Filter;
