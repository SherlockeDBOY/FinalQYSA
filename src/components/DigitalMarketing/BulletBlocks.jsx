import React from 'react'
import PropTypes from 'prop-types'

const BulletBlocks = ({data}) => {
    return (
        <div className="bullet-block" style={{width: "100%"}}>
            <div className={`bullet-block__icon ${data.dispPara}`}></div>
            <div className="bullet-block__content">
                <h3>{data.title}</h3>
                <span className={`bullet-block__p font-17 text-left ${data.dispPara}`} dangerouslySetInnerHTML={{ __html: data.info }} />
            </div>
        </div>
    )
}

BulletBlocks.propTypes = {
    data: PropTypes.string
}

export default BulletBlocks
