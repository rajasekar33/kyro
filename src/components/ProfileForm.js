
import TextField from "../elements/TextField";
import userIcon from '../assets/icons/user.png'
import emailIcon from '../assets/icons/mail.png'
import phoneIcon from '../assets/icons/telephone.png'
import nameIcon from '../assets/icons/name.png'
import locationIcon from '../assets/icons/location.png'
import Heading from "../elements/Heading";
import Span from "../elements/Span";
import Button from "../elements/Button";
import { useEffect, useState } from "react";

import { updateUserById } from '../services/users'


function ProfileForm(props) {

    useEffect(() => {
    }, ["https://kyro-user-service-mgmqxruica-uc.a.run.app/users"])



    async function saveUser() {

        const formData = {};
        for (let formElementIdentifier in profileForm) {
            if (formElementIdentifier !== 'number' && formElementIdentifier !== 'location' && formElementIdentifier !== 'numberOptional')
                formData[formElementIdentifier] = document.getElementById(formElementIdentifier).value
        }
        formData['last_updated_at'] = new Date();
        
        const result = await updateUserById(user.id, formData);
        if(!result) {
            setSaveError(true)
            setTimeout(() => {
                setSaveError(false)
            }, 3000);
        }
    }

    function inputChangedHandler(event, inputIdentifier) {

    }

    const { user } = props

    const userForm = {
        first_name: {
            elementType: 'input',
            label: 'First Name',
            elementConfig: {
                type: 'text',
                icon: userIcon
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        last_name: {
            elementType: 'input',
            label: 'Last Name',
            elementConfig: {
                type: 'text',
                icon: userIcon
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        display_name: {
            elementType: 'input',
            label: 'Display Name',
            elementConfig: {
                type: 'text',
                icon: nameIcon
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        email: {
            elementType: 'input',
            label: 'Email',
            elementConfig: {
                type: 'email',
                icon: emailIcon
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false,
        },
        number: {
            label: 'Phone No (work)',
            elementType: 'input',
            elementConfig: {
                type: 'number',
                icon: phoneIcon
            },
            value: '',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 10,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        numberOptional: {
            label: 'Phone No (work)',
            elementType: 'input',
            elementConfig: {
                type: 'number',
                icon: phoneIcon
            },
            value: '',
            validation: {
                required: false,
                minLength: 10,
                maxLength: 10,
                isNumeric: true
            },
            valid: true,
            touched: false
        },
        location: {
            elementType: 'input',
            label: 'Location',
            elementConfig: {
                type: 'text',
                icon: locationIcon
            },
            value: '',
            validation: {
                required: false
            },
            valid: true,
            touched: false,
        }
    }

    const [profileForm, setProfileForm] = useState(userForm)
    const [valid, setValid] = useState(false)
    const [saveError, setSaveError] = useState(false)

    const formElementsArray = [];
    for (let key in profileForm) {
        profileForm[key].value = user ? user[key] : '';
        formElementsArray.push({
            id: key,
            config: profileForm[key]
        });
    }
    let form = (
        <form>
            {formElementsArray.map(formElement => {

                return <TextField
                    id={formElement.id}
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    label={formElement.config.label}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            })}

        </form>
    );

    return (
        <div className="profileForm">
            <div className="formHeader">
                <Heading level={2} text={`Good Morning, ${user?.first_name}`} />
                <Span text="Sep, 2022" />
            </div>
            <div className="marginT50">
                <Heading level={3} text="My Profile" />
                {saveError && <Span css="alertMessage" text={saveError ? "Error updating data" : ''} />}
                {form}
                <Button onClick={saveUser} css="kyroBtn userFormBtn" btnType="submit" text="Save" />
            </div>
        </div>
    );
}

export default ProfileForm;
