import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({ data }) => {
    return (
        <div className="contact-info">
            <div className="info text-left">
                <h4>{data.title}</h4>
                <span className="info-text text-left font-17" dangerouslySetInnerHTML={{ __html: data.info }} />
            </div>
        </div>
    )
}

TextBox.propTypes = {
    data: PropTypes.object
}

export default TextBox
