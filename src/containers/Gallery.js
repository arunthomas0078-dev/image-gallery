import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import imagesActionCreators from '../store/actions/Gallery';
import GalleryItem from '../components/gallery/GalleryItem';
import GalleryModal from '../components/gallery/GalleryModal';
import Loader from '../components/common/Loader';

class Gallery extends Component {

    state = {
        imageList: [],
        selectedImage: {
            title: "",
            author: "",
            description: ""
        },
        isEdit: false,
        isPopupOpen: false,
        loading: false
    }
    
    async componentDidMount() {
       this.toggleLoader();
       await this.loadImages();
       this.toggleLoader();
    }

    async componentDidUpdate(prevProps, prevState) {
        if(this.props.loggedInUser) {
            if(prevState.isEdit !== this.props.match.params.isEdit){
                        await this.setState({
                            ...this.state,
                            isEdit: this.props.match.params.isEdit 
                        })
                    }
            }
            else if(this.state.isEdit) {
                await this.setState({
                    ...this.state,
                    isEdit: false
                })
            }
    }

    async loadImages() {
        await this.props.getImages();
        await this.setState({
            ...this.state,
            imageList: this.props.imageList
        })
    }

    onImageClick = async(image) => {
         this.setState({
                selectedImage: image,
                isPopupOpen: true
            });
    }

    toggleLoader = async() => {
        this.setState({
            ...this.state,
            loading: !this.state.loading
        });
    }

    onChangeImageInfo = async(e) => {
        const image = {
            ...this.state.selectedImage,
            [e.target.name]: e.target.value
        };
        this.setState({
            selectedImage: image
        });
    }

    saveImageInfo = async() => {
        this.toggleLoader();
        await this.props.saveImageInfo(this.state.selectedImage);
        await this.loadImages();
        this.toggleLoader();
        this.closeModal();
    }

    closeModal = async () => {
         this.setState({
            isPopupOpen: false
        });
    }

    render() {
        return (
            <>
                <Loader loading = {this.state.loading}/>
                {this.props.imageList.map(item => 
                    <GalleryItem 
                        image = {item}  
                        imageClickHandler= {this.onImageClick}/>)} 

                 <GalleryModal 
                    isPopupOpen = {this.state.isPopupOpen}
                    closeModalHandler = {this.closeModal}
                    isEdit = {this.state.isEdit}
                    image = {this.state.selectedImage}
                    changeImageInfoHandler = {this.onChangeImageInfo}
                    saveImageInfoHandler = {this.saveImageInfo}/>
            </>
        )
    }
}

export default connect(
    state => ({ ...state.gallery, ...state.application }),
    dispatch => bindActionCreators(imagesActionCreators, dispatch)
)(Gallery);
