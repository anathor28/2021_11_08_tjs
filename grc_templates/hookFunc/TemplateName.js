import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './TemplateName.module.scss'

/**
 * etat initial du state de TemplateName
 */
export const initialState={}
/**
 * Composant TemplateName
 * @param {object} props props du comp TemplateName
 * @returns render of TemplateName
 */
const TemplateName = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //didMount & didUpdate
        return () => {
          //willUnMount
        }
    }, [state]);
    return (
        <div className={style.TemplateName} data-testid="TemplateName">
            templateName hook function component
        </div>
    );
};


TemplateName.propTypes = {

};
TemplateName.defaultProps={

};

export default TemplateName;
