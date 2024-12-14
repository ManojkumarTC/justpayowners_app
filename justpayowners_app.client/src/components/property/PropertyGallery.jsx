
import ImageGallery from 'react-image-gallery';
/*import { images } from '../data/gallery-image';*/

import "react-image-gallery/styles/css/image-gallery.css";
import ImageUploading from "react-images-uploading";

const PropertyGallery = () => {

    const images = [
        {
            original: "https://picsum.photos/id/1024/1000/600/",
            thumbnail: "https://picsum.photos/id/1024/250/150/",
        },
        {
            original: "https://picsum.photos/id/1025/1000/600/",
            thumbnail: "https://picsum.photos/id/1025/250/150/",
        },
        {
            original: "https://picsum.photos/id/1026/1000/600/",
            thumbnail: "https://picsum.photos/id/1026/250/150/",
        },
        {
            original: "https://picsum.photos/id/1027/1000/600/",
            thumbnail: "https://picsum.photos/id/1027/250/150/",
        },
        {
            original: "https://picsum.photos/id/1029/1000/600/",
            thumbnail: "https://picsum.photos/id/1029/250/150/",
        },
    ];

    return (<div className="card">

        <div className="card-body">


            <ImageGallery
                items={images}
                autoPlay={true}
                showThumbnails={false} />

        </div>
        <div className="card-footer text-right">
            <button type="submit" className="btn btn-primary">Property Overview </button>

        </div>
    </div>


    )
}
export default PropertyGallery