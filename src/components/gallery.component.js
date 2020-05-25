import React from 'react';
// import img1 from '../images/manhattan-apartment-2.jpg'
// import img2 from '../images/Woah there.jpg'
// import img3 from '../images/MemeLoveTriangle_297886754.jpg'
// import img4 from '../images/4m50wuzvxhg21.jpg'
// import img5 from '../images/Dwvv7b2VsAAfj_3.jpg'
// import img6 from '../images/Annotation 2020-05-02 170502.png'
import { FaUpload } from 'react-icons/fa';
import axios from 'axios';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: <div />
    }
    this.populateImages = this.populateImages.bind(this)
  }

  componentDidMount() {
    this.populateImages()
    console.log('Image State populated')
    // console.log(this.state.images)
  }

  populateImages = async () => {
    axios.get(`http://localhost:5000/images/fetch/${this.props.username}`)
      .then((res) => {
        console.log(res)
        this.setState({ images: res.data.map((image,index)=><img key={index} src={image.url} alt={image._id}/>)})
        console.log(res.data)
        console.log(this.state.images)
      })
      .catch(err => console.log('Loading' + err))
  }

  render() {
    console.log(this.props.states)
    return (
      <div>
        <div>
          <button
            className={'btn btn-light centered'}
            onClick={this.props.gridToggle}>View as {this.props.gridView ? `List` : `Grid`}
          </button>
        </div>
        <div className={this.props.galleryStyle}>
          {console.log(typeof(this.state.images))}
          {this.state.images}
                    {/* {this.state.images.map((image, index) => <img src={this.state.images[index].url} alt={'asda'} />)} */}
        </div>
        <div>
          <button type={'button'} id={'prev-page'} className={'btn btn-dark nav-button'}>Previous</button>
          <button type={'button'} id={'upload'} className={'btn nav-button'}><FaUpload /></button>
          <button type={'button'} id={'next-page'} className={'btn btn-primary nav-button'}>Next</button>
        </div>
      </div>
    )
  }
}
