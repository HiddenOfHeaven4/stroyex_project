import React from 'react';

import {BsFillCloudSunFill} from 'react-icons/bs';
import {BsFillPaletteFill} from 'react-icons/bs';
import {BsFillHouseFill} from 'react-icons/bs';
import {BsFillCpuFill} from 'react-icons/bs';
import {BsBuilding} from 'react-icons/bs';

import ProjectBlock from './ProjectBlock';

export default class ProjectList extends React.Component {
    projects = [
        {
            icon: BsFillCloudSunFill,
            direction: 'Благоустройство территорий',
            description: 'это комплекс мероприятий по инженерной подготовке к озеленению, устройству покрытий, освещению, размещению малых архитектурных форм и объектов монументального искусства, направленных на улучшение функционального, санитарного, экологического и эстетического состояния'
        },
        {
            icon: BsFillHouseFill,
            direction: 'Общие СМР',
            description: 'общее название технологических действий, направленных на сооружение зданий и инженерных конструкций различных видов. Сюда входит как общее строительство традиционными методами из кирпича, бруса, блоков, так и монтаж из готовых металлоконструкций и ЖБИ'
        },
        {
            icon: BsFillPaletteFill,
            direction: 'Антикоррозийные работы',
            description: 'это комплекс мероприятий, направленных на устранение ржавчины и покрытие поверхностей кузова защитными составами'
        },
        {
            icon: BsFillPaletteFill,
            direction: 'Огнезащитные работы',
            description: 'это комплекс мер, направленный на снижение огнестойкости конструкций и обеспечение пожарной безопасности. Рассматриваемое направление предусматривает отделку, пропитку или нанесение специального покрытия на строительные конструкции.'
        },
        {
            icon: BsFillCpuFill,
            direction: 'Теплоизоляция трубопроводов',
            description: 'это спецматериал, используемый при укладке труб. Основная его функция заключается в обеспечении энергосбережения за счет снижения процесса теплообмена между трубами и внешней средой.'
        },
        {
            icon: BsBuilding,
            direction: 'Монтаж металлоконструкций',
            description: 'это процесс, при котором стальные конструкции соединяются в несущий каркас. Из стальных профилей производятся отдельные несущие металлоконструкции. Монтаж металлоконструкций является трудоёмким процессом в связи с тем, что технологические металлоконструкции обычно индивидуальные.'
        }
    ];

    render() {
        return (
            <section id="Projects" className="px-2 clean-block features">
                <div className="container py-20">
                    <div className="mb-8">
                        <p className="text-3xl font-medium text-companyBlue-600 text-center">Наши услуги</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {
                            this.projects.map((project, index) => <ProjectBlock entity={project} key={index}/>)
                        }
                    </div>
                </div>
            </section>
        );
    }
}