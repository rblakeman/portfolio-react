import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        return (
            <div class="col-lg-4">
                <img class="rounded-circle" src={this.props.image} alt="CSUMB Logo"
                    width="140" height="140" />
                <h2>{this.props.title}</h2>
                <p>{this.props.contents}</p>
                <p>
                    <a class="btn btn-secondary" href={this.props.button_url} target="_blank" role="button">{this.props.button_text} &raquo;</a>
                </p>
            </div>
        )
    }
}