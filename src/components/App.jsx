import { useState, useEffect } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { AppStyle } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from "./LoadMore/LoadMore";
import { Loader } from './Loader/Loader';
import { fetchImages }from './servisApi';

export const  App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [openButtonLoadMore, setOpenButtonLoadMore] = useState(false);

  useEffect(() => { 

    async function getImage() {
      try {
setStatus('pending');
        const searchInfo = await fetchImages(query, page)
          if (searchInfo.hits.length !== 0) {
            if (searchInfo.totalHits - 12 * page > 0) {
              setOpenButtonLoadMore(true)
            } else {
              setOpenButtonLoadMore(false)
            }
          setImages(prevImages => [...prevImages, ...searchInfo.hits])
          setStatus('resolved')
          return 
          }
        setStatus('rejected')
        throw new Error("Sory, no result!");
      } catch (error) {
        setStatus('rejected')
      }
    }

    if (query==='') {
      return
    }
   getImage()
  }, [query, page])

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setStatus('pending');
  };

    if (status === "idle") {
      return (
        <AppStyle>
          <Searchbar onSubmit={handleFormSubmit} />
          <p>Enter the name of the picture</p>
        </AppStyle>
      );
    }

    if (status === "pending") {
      return (
        <AppStyle>
          <Searchbar onSubmit={handleFormSubmit} /> 
          <ImageGallery items={images} />
          <Loader />
        </AppStyle>       
      );
    }

    if (status === "resolved") {
      return (
        <AppStyle>
          <Searchbar onSubmit={handleFormSubmit} />
          <ImageGallery items={images} />
          {openButtonLoadMore && <LoadMore onClick={loadMore} />}
        </AppStyle>
      );
    }

    if (status === "rejected") {
      return (
        <AppStyle>
          <Searchbar onSubmit={handleFormSubmit} />
          <h1>{`No results containing ${query} were found.`}</h1>
        </AppStyle>
      );
    }
};
