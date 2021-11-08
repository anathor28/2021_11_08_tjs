import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './TemplateName.module.css'

class TemplateName extends Component {
    /**
     * Contructeur du composant TemplateName
     * @param {Object} props 
     */
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return (
            <div className={style.TemplateName} data-testid="TemplateName">
                templateName component
            </div>
        );
    }
}

TemplateName.propTypes = {

};

export default TemplateName;
