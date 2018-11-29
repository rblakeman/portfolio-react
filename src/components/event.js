import React, { Component } from 'react';


export default class Event extends Component {

    renderEvent() {
        const {orientation} = this.props
        if (orientation === "left")
        {
            return (
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">{this.props.title}
                            <br />
                            <span class="text-muted">{this.props.date}</span>
                        </h2>
                        <p class="lead">{this.props.contents}</p>
                    </div>
                    <div class="col-md-5">
                        <img class="featurette-image img-fluid mx-auto" src={this.props.image} alt="Graduation Image" />
                    </div>
                </div>
            )
        }
        else if (orientation === "right")
        {
            return (
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">{this.props.title}
                            <br />
                            <span class="text-muted">{this.props.date}</span>
                        </h2>
                        <p class="lead">{this.props.contents}</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="featurette-image img-fluid mx-auto" src={this.props.image} alt="Graduation Image" />
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderEvent()}
            </div>
        )
    }
}