import PropTypes from 'prop-types';
import { GalleryItem, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from "react";

export function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);
//  const [largeImage, setLargeImage] = useState('');
  
  const openModal = () => {
    setShowModal(!showModal);   
  };

  //  const openModal = largeImageURL => {
  //   setLargeImage(largeImageURL);
  // };

  // const closeModal = () => {
  //   setLargeImage('');
  // };
  
  return (
    <GalleryItem onClick={openModal} >
      <Img src={webformatURL} alt={tags} />
      { showModal && <Modal  ><img src={largeImageURL} alt={tags} /></Modal> }
      {/* { largeImage.length > 0 && <Modal onClose={closeModal} ><img src={largeImageURL} alt={tags} /></Modal> } */}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }; 
