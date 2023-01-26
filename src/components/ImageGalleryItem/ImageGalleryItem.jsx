import PropTypes from 'prop-types';
import { GalleryItem, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from "react";

export function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false)
 
  const openModal = () => {
    setShowModal(prevShowModal  => (prevShowModal = !showModal);
   };
  
//  const { webformatURL, tags, largeImageURL } = this.props;
  
  return (
    <GalleryItem onClick={openModal}  >
      <Img src={webformatURL} alt={tags} />
      {showModal && <Modal onClose={openModal} ><img src={largeImageURL} alt={tags} /></Modal>
     }
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }; 
