import React from 'react'
import PropTypes from 'prop-types'

const BulletBlockSmHeading = ({data}) => {
    return (
        <div className="bullet-block" style={{width: "100%"}}>
            <div className={`bullet-block__icon ${data.dispPara}`}></div>
            <div className="bullet-block__content">
                <h6>{data.title}</h6>
                <span className={`bullet-block__p font-17 text-left ${data.dispPara}`} dangerouslySetInnerHTML={{ __html: data.info }} />
            </div>
        </div>
    )
}

BulletBlockSmHeading.propTypes = {
    data: PropTypes.string

}

export default BulletBlockSmHeading
