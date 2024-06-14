import React from 'react';

type Props = {
    getNews: (category?: string) => Promise<void>; // Assuming getNews is async
};

const categories = ['business', 'sports', 'technology', 'world'];

const Filter: React.FC<Props> = ({ getNews }) => {
  const handleCategoryClick = (category?: string) => async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await getNews(category);
  };

    return (
        <section className='px-20 w-1/6'>
            <ul>
                <li className='mt-12 lg:mt-8'>
                    <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200'>Category</h5>
                    <li>
                        <a href="" onClick={handleCategoryClick()}>Reset</a>
                    </li>
                    <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
                        {categories.map((category) => (
                            <li key={category}>
                                <a onClick={handleCategoryClick(category)} href="#" className='block hover:border-slate-400 text-slate-700 hover:text-slate-900 no-underline'>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Filter;
