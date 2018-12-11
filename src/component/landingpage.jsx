import React, { Component } from 'react';
import '../stylesheets/landingpage.css'
import $ from 'jquery'
//import Testing from '../images/testing.jpg'

import * as action from '../actions/action.js'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    GetDataState: state.GetDataReducer.GetDataState,
})

const mapDispatchToProps = dispatch => ({
    fetchGetData() {
        dispatch(
            action.GetDataAction()
        )
    },
})


class LandingPageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }

    componentDidMount() {
        this.props.fetchGetData()

    }
    reDirect(url){
        //window.location.href=url //To open the url in same page
        window.open(url, "_blank") //to open in the new tab of the product
    }

    render() {
        const { GetDataState } = this.props
        console.log(GetDataState)
        const height = $(window).height()
        return (
            <div className="col-sm-12 mainpage" style={{ minHeight: height }}>
                <div className="col-sm-8 offset-sm-2 cardpage">
                    <div className="row">
                        {(GetDataState.length !== 0) ?
                            GetDataState.map((value, i) =>
                                <div className="col-sm-3 cardcontain">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img src={GetDataState[i].small_image} className="productimg" alt="" />
                                        </div>
                                        <div className="col-sm-12 text-center">
                                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#333333b0" }}>{GetDataState[i].name}</span>
                                        </div>
                                        <div className="col-sm-12 text-center">
                                            <span style={{ color: "red", fontWeight: 600,fontSize:"12px" }}>Size:</span>
                                            <span style={{ fontWeight: 600, fontSize: "11px" }}> {GetDataState[i].size}</span>
                                        </div>
                                        <div className="col-sm-12 text-center">
                                            <span style={{ color: "red", fontWeight: 600 }}>₹{GetDataState[i].price}</span>
                                        </div>
                                        <div className="col-sm-12 text-center">
                                            <button className="col-sm-5 btn btn-danger btn-sm" onClick={(e)=>{this.reDirect(GetDataState[i].url)}}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            <div>No Records</div>

                    }

                    </div>
                </div>

            </div>
        )

    }
}
const LandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPageComp)
export default LandingPage
