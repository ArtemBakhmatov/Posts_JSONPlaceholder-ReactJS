import React from 'react';

import MyInput from '../Input/MyInput';
import MySelect from '../select/MySelect';
import MyButton from '../button/MyButton';

import './postFilter.scss';

const PostFilter = ({filter, setFilter, setModal}) => {
    return (
        <div className='filter'>
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
			<MyButton onClick={() => setModal(true)}>
                    Создать пост
            </MyButton>
        </div>
    );
};

export default PostFilter;