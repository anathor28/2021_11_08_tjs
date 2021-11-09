import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './MemeForm.module.scss'

/**
 * etat initial du state de MemeForm
 */
export const initialState={}
/**
 * Composant MemeForm
 * @param {object} props props du comp MemeForm
 * @returns render of MemeForm
 */
const MemeForm = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //didMount & didUpdate
        return () => {
          //willUnMount
        }
    }, [state]);
    return (
        <div className={style.MemeForm} data-testid="MemeForm">
            memeForm hook function component
        </div>
    );
};


MemeForm.propTypes = {

};
MemeForm.defaultProps={

};

export default MemeForm;
