import React from 'react'

export default ({ info }) => (
    <div class='panel panel-default' style={{ padding: '10px 20px' }}>
        <p style={{ fontWeight: '500', fontSize: '1.5em' }}>
            <span>{info.name}</span>
        </p>
        <p>
            <a href={`tel:${info.phone}`} style={{ color: '#979797' }}>{info.phone}</a>
            <span> | </span>
            <a href={info.website} target='_blank'>Visit Website</a>
        </p>
    </div>
)
