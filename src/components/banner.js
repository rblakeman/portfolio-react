import React, { Component } from 'react';

export default class Banner extends Component {
    renderBanner() {
        return (
            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">{this.props.title}</h1>
                    <p class="lead text-muted">{this.props.subtitle}</p>
                    <p>
                    {/* <!--<a href="#" class="btn btn-primary my-2">Main call to action</a>--> */}
                    {/* <!--<a href="https://sites.google.com/csumb.edu/vxgi" class="btn btn-secondary my-2">Original Website</a>--> */}
                    </p>
                </div>
            </section>
        )
    }

    render() {
        return (
            <div>
                {this.renderBanner()}
            </div>
        )
    }
}