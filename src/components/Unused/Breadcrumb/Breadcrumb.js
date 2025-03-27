import "./Breadcrumb.css"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Breadcrumb() {
    return (
        <div className="row align-items-center" id="bar">
            <div className="col-md-6 d-flex justify-content-center align-items-center" id="text-container">
                <p className="lead" id="text">Join the Leaf to Ladle community!</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center" id="btn-container">
                <button className="btn btn-primary">Dine with Us!</button>
            </div>
        </div>
    )
}

export default Breadcrumb;