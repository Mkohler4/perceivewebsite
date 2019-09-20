import React, { Component } from 'react';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Perceive from "../images/Perceive.png";
import Button from '@material-ui/core/Button';
import cellularIcon from '../images/cellularIcon.png'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        this.updateWindowDimensions();
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }
    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
        });
    }
    render() {
        return (
            <div className="parent" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div className="appBar" hidden={this.state.width < 900 ? true : false}>
                    <img src={Perceive} className="appBarImage" />
                    <h2 style={{ flex: 40 }}>erceive</h2>
                    <h3 style={{ flex: 12, fontSize: "20px" }}>Portfolio</h3>
                    <h3 style={{ flex: 12, fontSize: "20px" }}>Estimate</h3>
                    <h3 style={{ flex: 10, fontSize: "20px" }}>About</h3>
                    <h3 style={{ flex: 12, fontSize: "20px", marginRight: "8%" }}>Contact</h3>
                </div>
                <div style={{ height: window.innerWidth < 900 ? "100%" : "80vh", display: "flex", flexDirection: "row" }}>
                    <div hidden={this.state.width < 900 ? true : false} className="col-5" style={{ flex: 1, justifyContent: "center", display: "flex", marginLeft: "8%", paddingLeft: "0" }}>
                        <div style={{ width: "100%", height: "280px", display: "flex", flexDirection: "column" }}>
                            <h1 style={{ fontSize: "70px", flex: 1 }}>Web</h1>
                            <h1 style={{ fontSize: "70px", flex: 1 }}>and App</h1>
                            <h1 style={{ fontSize: "70px", flex: 1 }}>Development</h1>
                            <Button className="buttonStyle" style={{ height: "77px", marginLeft: "70px", marginTop: "40px" }}>Get Started</Button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: this.state.width < 900 ? "center" : "baseline", marginRight: window.innerWidth < 900 ? "0" : "5%" }}>
                        <img src={Perceive} hidden={this.state.width < 900 ? true : false} className="perceiveLogo" style={{ height: "70%", position: "absolute", marginTop: "35px", left: "32%" }} />
                        <div className="iphone iphoneTransform">
                            <div hidden={this.state.width < 900 ? false : true} style={{ width: "100%", flex: 1, maxHeight: "50px", display: "flex", flexDirection: "row" }}>
                                <div style={{ flex: 1, justifySelf: "center", alignSelf: "center", display: "flex", justifyContent: "center" }}>
                                    {/* <img src={cellularIcon} style={{ transform: "scale(0.05)", flex: 1 }}></img> */}
                                    <h1 style={{ fontSize: "10px" }}>Percieve</h1>
                                </div>
                                <div style={{ flex: 1, justifySelf: "center", alignSelf: "center", display: "flex", justifyContent: "center" }}>
                                    <h3 style={{ fontSize: "7px" }}>9:20 pm</h3>
                                </div>
                                <div style={{ flex: 1, justifySelf: "center", alignSelf: "center", display: "flex", justifyContent: "center" }}>
                                    <h3 style={{ fontSize: "7px" }}>9%</h3>
                                </div>
                            </div>
                            <div style={{ width: "100%", flex: 12, display: "flex", flexDirection: "column" }}>
                                <div style={{ width: "100%", flex: "1", display: "flex", flexDirection: "row" }}>
                                    <div className="appAboutImage" hidden={this.state.width < 900 ? false : true} style={{ height: "71px", maxWidth: "71px", borderRadius: "15px", flex: 1, margin: "auto" }} />
                                    <div className="appPortfolioImage" hidden={this.state.width < 900 ? false : true} style={{ height: "71px", maxWidth: "71px", border: "2px solid black", borderRadius: "15px", flex: 1, margin: "auto" }} />
                                    <div className="appEstimateImage" hidden={this.state.width < 900 ? false : true} style={{ height: "71px", maxWidth: "71px", borderRadius: "15px", flex: 1, margin: "auto" }} />
                                </div>
                                <div style={{ width: "100%", flex: "1" }}></div>
                                <div style={{ width: "100%", flex: "1" }}></div>
                                <div style={{ width: "100%", flex: "1" }}></div>
                                <div style={{ width: "100%", flex: "1" }}></div>
                                <div style={{ width: "100%", flex: "1" }}></div>
                            </div>
                            <div className="iphoneLine"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LandingPage;