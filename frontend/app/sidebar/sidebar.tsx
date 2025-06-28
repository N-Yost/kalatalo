const Sidebar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <h3>Contact Me</h3>
                    <hr className="solid" />
                </div>
                <div className="row ms-1">
                    <div className="col">
                        <h5>Email:</h5>
                    </div>
                    <div className="col">
                        <p>kalatalo@ipac.caltech.edu</p>
                    </div>
                </div>
                <div className="row ms-1">
                    <div className="col">
                        <h5>Phone:</h5>
                    </div>
                    <div className="col">
                        <p>+1 (626) 720-5555</p>
                    </div>
                </div>
                <div className="row ms-1">
                    <div className="col">
                        <h5>Address:</h5>
                    </div>
                    <div className="col">
                        <p>
                            700 S. Main Ave.
                            Temporary, CA 91125
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <h3>Research</h3>
                    <hr className="solid" />
                </div>
                <div className="row mb-3 ms-1">
                    <li className="sList">
                        <a href="#" className="sLink">Shocked gas in galaxies</a>
                    </li>
                    <li className="sList">
                        <a href="#" className="sLink">NGC 1266</a>
                    </li>
                    <li className="sList">
                        <a href="#" className="sLink">ATLAS3D</a>
                    </li>
                    <li className="sList">
                        <a href="#" className="sLink">ROTSE</a>
                    </li>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <h3>Links</h3>
                    <hr className="solid" />
                </div>
                <div className="row ms-1">
                    <li className="sList">
                        <a href="#" className="sLink">Photography</a>
                    </li>
                    <li className="sList">
                        <a href="#" className="sLink">Fellowships</a>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
