import React from 'react';
import styles from './FormFieldDecorator.module.css'

export const FormFieldDecorator = ({input, meta, ...rest}) => {
    debugger
    return(<div className={styles.formFieldError}>
        
        <textarea {...input} {...rest} />
        
        
        {meta.touched && meta.error && <div><span>{meta.error}</span></div>}
        
        </div>
    )
}