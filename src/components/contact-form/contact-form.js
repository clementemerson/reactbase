import './contact-form.scss';
import React from 'react';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

const ContactForm = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className={`contact-form-grid ${className}`}>
            <form onSubmit={onFormSubmit} className="ui form">
                <TextInput
                    className=""
                    inputType="text"
                    inputName="fName"
                    placeholderText={t('Name')}
                    labelText={t('Name')}
                    required={true}
                />
                <TextInput
                    className=""
                    inputType="email"
                    inputName="email"
                    placeholderText={t('Email')}
                    labelText={t('Email')}
                    required={true}
                />
                <TextInput
                    className=""
                    inputType="tel"
                    inputName="mobileNo"
                    placeholderText={t('MobileNo_PlaceHolder')}
                    labelText={t('MobileNo_Label')}
                    pattern="[0-9]{10}"
                    required={true}
                    minlength="10"
                    maxlength="10"
                />
                <Button
                    btnText="Submit"
                    btnType="submit"
                    className="primary"
                />
            </form>
        </div>
    );
}

export default ContactForm;