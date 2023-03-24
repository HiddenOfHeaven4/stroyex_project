import React from 'react';

import coverImg from './cover.jpg';


export default class About extends React.Component {
    render() {
        return (
            <section id="About" className="bg-companyBlue-100">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">О нас</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="md:flex-1 bg-white md:mr-3">
                            <img src={coverImg}
                                 className="max-w-full h-auto border border-solid border-gray-200 rounded p-1"
                                 alt="About Us"/>
                        </div>
                        <div className="md:flex-1 md:ml-3">
                            <p className="md:text-left text-center">
                                ООО ГСК СТРОЙЭКСПЕРТ производит на профессиональном уровне антикоррозионные и огнезащитные покрытия металлических конструкций и очистку поверхностей,
                                изготовление и нанесение защитных покрытий на детали трубопроводов.
                                Занимается проектированием, производством металлоконструкций. Осуществляем доставку-монтаж металлоконструкций.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
