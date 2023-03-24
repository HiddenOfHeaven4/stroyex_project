import React from 'react';
import PropType from 'prop-types'

import Contact from './Contact';


export default class Employee extends React.Component {
    static propTypes = {
        employee: PropType.shape({
            name: PropType.string.isRequired,
            position: PropType.string.isRequired,
            contacts: PropType.arrayOf(PropType.shape({
                icon: PropType.func.isRequired,
                url: PropType.string.isRequired
            })).isRequired
        }).isRequired
    };

    render() {
        const {employee} = this.props;

        return (
            <div className="sm:w-1/2 px-4 lg:w-1/3 pt-2">
                <div className="rounded border border-1 border-gray-300 text-center shadow-lg shadow-gray-400/30">
                    <img className="w-full rounded rounded-t w-full block" alt={employee.name}
                         src={'img/employees/' + employee.name + '.jpeg'}/>
                    <div className="flex-auto p-6 info h-40 items-center justify-center mb-2 ">
                        <h4 className="mb-3 font-semibold">{employee.name}</h4>
                        <p className="mb-0">{employee.position}<br/></p>
                        <div className="flex justify-center">
                            {
                                employee.contacts.map((contact, index) => <Contact contact={contact} key={index}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
