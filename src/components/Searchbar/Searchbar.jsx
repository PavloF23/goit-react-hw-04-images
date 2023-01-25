import PropTypes from 'prop-types';
import { useState } from "react";
import { IoSearchOutline } from 'react-icons/io5';
import { Header, SearchForm, Button, Label, Input, } from './Searchbar.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Searchbar({ onSubmit }) {
  const [findImg, setFindImg] = useState('');
   
const handleNameChange = evt => {
  setFindImg(evt.currentTarget.value.toLowerCase());
};

const handleSubmit = evt => {
  evt.preventDefault();

  if (findImg.trim() === '') {
    return toast.error('Please enter something.');
  }
  onSubmit(findImg);
  setFindImg('');
};

    return (
      <Header>
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        <SearchForm onSubmit={handleSubmit}>
          <Button type="submit">
            <IoSearchOutline size={24} />
            <Label>Search</Label>
          </Button>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={findImg}
            onChange={handleNameChange}
          />
        </SearchForm>
      </Header>
    );
  };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};