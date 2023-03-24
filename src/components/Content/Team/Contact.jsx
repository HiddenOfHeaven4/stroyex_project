import React from 'react';
import PropType from 'prop-types'


export default class Contact extends React.Component {
    static propTypes = {
        contact: PropType.shape({
            icon: PropType.func.isRequired,
            url: PropType.string.isRequired
        }).isRequired
    };

    render() {
        const {contact} = this.props;

        return (
            <a className="m-2" href={contact.url}>
                <contact.icon className="text-companyBlue text-lg"/>
            </a>
        );
    }
}
