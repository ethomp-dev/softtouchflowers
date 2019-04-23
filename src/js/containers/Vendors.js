import React from 'react'

import Vendor from '../components/Vendor'

import { vendorData } from '../data'

export default class About extends React.Component {
    componentDidMount() {
        document.title = 'Soft Touch Flowers | Preferred Vendors';
    }

    render() {
        return (
            <div class='container'>
                <h1>Preferred Vendors</h1>
                <p>
                    It takes more than flowers to make your wedding a wonderful experience. We have worked with
                    all of these vendors and highly recommend them for your special day.
                </p>

                {vendorData.map((type) => (
                    <section>
                        <hr />

                        <h2>{type.heading}</h2>

                        <div class='row'>
                            {type.vendors.map((vendor, i) => (
                                <div class='col-xs-12 col-md-6 col-lg-4'>
                                    <Vendor key={type.key + i} info={vendor} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        )
    }
}
