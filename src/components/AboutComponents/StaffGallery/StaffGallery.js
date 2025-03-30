import './StaffGallery.css';
import 'bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function StaffGallery() {
    return (
        <div className="staff-gallery">
            <div className="row gallery-row">
                <div className="col gallery-col" id="col1">
                    <img className="long-image" src="https://images.pexels.com/photos/4252781/pexels-photo-4252781.jpeg" />
                    <img className="short-image" src="https://images.pexels.com/photos/6510867/pexels-photo-6510867.jpeg" />
                </div>
                <div className="col gallery-col" id="col2">
                    <img className="short-image" src="https://images.pexels.com/photos/7851312/pexels-photo-7851312.jpeg" />
                    <img className="long-image" src="https://images.pexels.com/photos/4253298/pexels-photo-4253298.jpeg" />
                </div>
                <div className="col gallery-col" id="col3">
                    <img className="long-image" src="https://images.pexels.com/photos/5561354/pexels-photo-5561354.jpeg" />
                    <img className="short-image" src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg" />
                </div>
            </div>
        </div>
    );
}

export default StaffGallery;