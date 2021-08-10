import React from 'react';
import ImageUploading from 'react-images-uploading';
import "./ImageUploader.css";

export default function ImageUploader(props) {
    const [images, setImages] = React.useState([]);
    const maxNumber = props.maxNum;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        props.setImages(imageList);
    };

    return (
        <div className="App">
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            }) => (
            // write your building UI
            <div className="upload__image-wrapper">
                
                <button
                className="btn-hm"
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                >
                Click or Drop here
                </button>
                &nbsp;
                <button  className= "btn-rmv" onClick={onImageRemoveAll}>Remove all images</button>
                <div className= "image-align">
                {imageList.map((image, index) => (
                <div key={index} className="dv-amk">
                    <img className="img-item" src={image['data_url']} alt=""  />
                    <div className="image-item__btn-wrapper">
                    <button className="btn-zbr" onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                </div>
                ))}
                </div>
            </div>
            )}
        </ImageUploading>
        </div>
    );
}