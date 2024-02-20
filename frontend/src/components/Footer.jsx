const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex py-4 ">
                <div className="container-fluid">
                    <div className="row mx-auto" style={{ maxWidth: 700 }}>
                        <div className="col-12 col-md-3">
                            <a className="linklable" href="#">
                                Site Map
                            </a>
                        </div>
                        <div className="col-12 col-md-3">
                            <a className="linklable" href="#">
                                Contact us
                            </a>
                        </div>
                        <div className="col-12 col-md-2">
                            <a className="linklable" href="#">
                                FAQ
                            </a>
                        </div>
                        <div className="col-12 col-md-2">
                            <a className="linklable" href="#">
                                Links
                            </a>
                        </div>
                        <div className="col-12 col-md-2">
                            <a className="linklable" href="#">
                                Offers
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex py-3 mx-auto">
                <a className="linklableCR " href="#">
                    MSKN Studio © 2024
                </a>
            </div>
        </div>
    );
};

export default Footer;
