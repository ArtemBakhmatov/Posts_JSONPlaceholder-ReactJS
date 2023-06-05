import React from 'react';

import MyInput from '../Input/MyInput';
import MySelect from '../select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <>
            <MyInput 
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder='Поиск...'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue='Сортирвка'
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'}
				]}
			/>
        </>
    );
};

export default PostFilter;