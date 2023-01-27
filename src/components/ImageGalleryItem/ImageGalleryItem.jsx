import PropTypes from 'prop-types';
import { GalleryItem, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from "react";

export function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);
//  const [largeImage, setLargeImage] = useState('');
  
  const openModal = () => {
    setShowModal(true);   
  };

  const closeModal = () => {
    setShowModal(false);   
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
      { showModal && <Modal onClose={closeModal} ><img src={largeImageURL} alt={tags} openMod={openModal} /></Modal> }
      {/* { largeImage.length > 0 && <Modal onClose={closeModal} ><img src={largeImageURL} alt={tags} /></Modal> } */}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }; 
