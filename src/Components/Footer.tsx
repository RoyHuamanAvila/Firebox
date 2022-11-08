import IonIcon from "@reacticons/ionicons";

const Footer = () => {
    return (
        <footer>
            <div className="row my-5">
                <div className="col-12">
                    <p className="fw-bold">FireBox</p>
                </div>
                <div className="col-6 col-md-4 col-xl-6">
                    <p className="fw-bold">Firebox Corp</p>
                    <p>New York, NY 10012, US</p>
                    <p>
                        info@example.com
                    </p>
                    <p>+ 01 234 567 88</p>
                    <p>+ 01 234 567 89</p>
                </div>
                <div className="col-6 col-md-2 col-xl-2">
                    <p className="fw-bold">Menu</p>
                    <p>Home</p>
                    <p>Speaker</p>
                    <p>About</p>
                    <p>Event</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <p className="fw-bold">Newsletter</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control p-3 py-2 rounded-0" placeholder="Subscribe" />
                        </div>
                        <div className="col">
                            <button title="subscribe" className="btn btn-primary text-white rounded-0">
                                <IonIcon name="mail-unread-outline" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end gap-3 pb-3 mb-3 border-bottom border-dark border-1">
                <IonIcon style={{ color: '#ee6f3f' }} name="logo-facebook" size="large" />
                <IonIcon style={{ color: '#ee6f3f' }} name="logo-youtube" size="large" />
                <IonIcon style={{ color: '#ee6f3f' }} name="logo-twitter" size="large" />
            </div>
            <div className="row">
                <div className="col">
                    <p>Copyright © 2022 FireBox all rights reserved</p>
                </div>
                <div className="col">

                </div>
                <div className="col">

                </div>
            </div>
        </footer>
    )
}

export default Footer;
