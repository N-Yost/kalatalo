const Sidebar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <h2>Contact Me</h2>
                    <hr className="solid" />
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Email:</h3>
                    </div>
                    <div className="col">
                        <p>kalatalo@ipac.caltech.edu</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Phone:</h3>
                    </div>
                    <div className="col">
                        <p>+1 (626) 720-4483</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Address:</h3>
                    </div>
                    <div className="col">
                        <p>
                            707 S. Wilson Ave.
                            Pasadena, CA 91125
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <h2>Research</h2>
                    <hr className="solid" />
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <h2>Links</h2>
                    <hr className="solid" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
