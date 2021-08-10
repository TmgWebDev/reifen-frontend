import ImageUploader from "./ImageUploader"
import React, {useState, useRef} from "react";
import * as bs from "react-bootstrap";
import "./SellPage.css";

function SellPage (props){
    const [primaryImage, setPrimary] = useState({});
    const [secondaryImages, setSecondary] = useState([]);
    const [errorShown, setErrorShown] = useState(0);
    const nameRef = useRef(null);
    const quantityRef = useRef(0);
    const priceRef = useRef(0);
    const descriptionRef = useRef(null);

    function handleSetPrimary(img) {
        setPrimary(img[0]);
    }
    function handleSecondary(imgs) {
        setSecondary(imgs);
    }
    
    function handleSubmit(){
        if ( !(primaryImage) || secondaryImages.length<0 || !nameRef.current.value || quantityRef.current.value<=0 || priceRef.current.value<=0|| ! descriptionRef.current.value)
        {
            setErrorShown(1);
        }
        else
        {
            setErrorShown(2);
            const primaryImageUrl = primaryImage.data_url;
            const secondaryImagesUrl = secondaryImages.map(img => img.data_url);
            props.setData({
                name:nameRef.current.value,
                quantity:quantityRef.current.value,
                price:priceRef.current.value,
                description:descriptionRef.current.value,
                primaryImage:primaryImageUrl,
                secondaryImages:secondaryImagesUrl
            })
        }
        window.scrollTo(0, 0);
    }

    return (
        <div>
            {errorShown===1 && <bs.Alert variant="danger"> Insufficient information. </bs.Alert>}
            {errorShown===2 && <bs.Alert variant="success"> Submitted successfully! </bs.Alert>}
            <bs.Container className="tiz-omak">
                <bs.Row className="justify-content-md-center">
                  <bs.Col lg="8">

                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Name</bs.Form.Label>
                        <bs.Form.Control ref={nameRef} placeHolder="Enter the name of the product"/>
                    </bs.Form.Group>

                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Quantity</bs.Form.Label>
                        <bs.Form.Control ref={quantityRef} placeHolder="Enter the quantity of the product"/>
                    </bs.Form.Group>

                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Price</bs.Form.Label>
                        <bs.Form.Control ref={priceRef} placeHolder="Enter the price of the product"/>
                    </bs.Form.Group>
                    
                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Description</bs.Form.Label>
                        <bs.Form.Control as="textarea" ref={descriptionRef} rows={3} />
                    </bs.Form.Group>

                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Primary Image</bs.Form.Label>
                        <ImageUploader maxNum={1} setImages={handleSetPrimary}/>
                    </bs.Form.Group>

                    <bs.Form.Group className="mb-3">
                        <bs.Form.Label>Secondary Images</bs.Form.Label>
                        <ImageUploader maxNum={6} setImages={handleSecondary} />    
                    </bs.Form.Group>

                    <bs.Button variant="dark" bg="black" onClick={handleSubmit}>
                        Submit
                    </bs.Button>

                  </bs.Col>
                </bs.Row>
            </bs.Container>
            
        </div>
    )
}
export default SellPage;