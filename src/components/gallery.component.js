import React from 'react';
import img1 from '../images/manhattan-apartment-2.jpg'
import img2 from '../images/Woah there.jpg'
import img3 from '../images/MemeLoveTriangle_297886754.jpg'
import img4 from '../images/4m50wuzvxhg21.jpg'
import img5 from '../images/Dwvv7b2VsAAfj_3.jpg'
import img6 from '../images/Annotation 2020-05-02 170502.png'


function Gallery(props) {
  return (
    <div>
      <button
        className={'btn btn-light centered'}
        onClick={props.gridToggle}>View as {props.gridView ? `List` : `Grid`}
      </button>
      <div className={props.galleryStyle}>
        <img src={img1} alt={'manhattan apartment'} ></img>
        <img src={img2} alt={'manhattan apartment'} ></img>
        <img src={img3} alt={'manhattan apartment'} ></img>
        <img src={img4} alt={'manhattan apartment'} ></img>
        <img src={img5} alt={'manhattan apartment'} ></img>
        <img src={img6} alt={'manhattan apartment'} ></img>
      </div>
      <div>
        <button type={'button'} id={'prev-page'} className={'btn btn-dark nav-button'}>Previous</button>
        <button type={'button'} id={'next-page'} className={'btn btn-primary nav-button'}>Next</button>
      </div>
    </div>
  )
}

export default Gallery;