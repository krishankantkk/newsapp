import React, { Component } from 'react'

export default class spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
