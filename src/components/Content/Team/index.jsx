import React from 'react';
import { FiGlobe } from 'react-icons/fi'

import Employee from './Employee';


export default class Team extends React.Component {
    team = [
        {
            name: 'ЖК Shome',
            position: 'г. Москва, ул. Кастанаевская дом 66',
            contacts: [
                {
                    icon: FiGlobe,
                    url: 'https://shome-house.ru/'
                }
            ]
        },
        {
            name: 'Культурный центр ГЭС-2',
            position: 'г. Москва, Болотная набережная 15',
            contacts: [
                {
                    icon: FiGlobe,
                    url: 'https://v-a-c.org/ges2'
                }
            ]
        },
        {
            name: 'Амурский газоперерабатывающий завод',
            position: 'Амурская обл. г. Свободный',
            contacts: [
                {
                    icon: FiGlobe,
                    url: 'https://blagoveshchensk-pererabotka.gazprom.ru/about/'
                }
            ]
        },
    ];

    render() {
        return (
            <section id="Team">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Наши проекты</p>
                        <p className="text-center mt-4 text-gray-400"></p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {this.team.map((employee, index) => <Employee employee={employee} key={index}/>)}
                    </div>
                </div>
            </section>
        );
    }
}
