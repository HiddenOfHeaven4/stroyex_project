import React from 'react';


export default class Preview extends React.Component {
    render() {
        return (
            <section className="bg-[url('components/Content/Preview/background.jpg')] bg-no-repeat bg-cover">
                <div className="pt-32 pb-16 md:w-full lg:w-3/4 xl:w-1/2 text-center whitespace-normal mx-auto">
                    <p className="pb-7 text-white md:text-3xl sm:text-3xl font-medium">
                    Компания «ГСК СТРОЙЭКСПЕРТ» была основана в 2014 году. С того момента и до сегодня мы являемся динамичной и инициативной компанией, мы получили колоссальный опыт в строительной отрасли, особенно в СМР. Наша цель – внести свою лепту как «ГСК СТРОЙЭКСПЕРТ» в профессиональном, качественном и надежном строительстве, которое активно развивается в нашей стране.<br/>
                    </p>
                    <button
                        className="mb-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-companyBlue-100 text-companyBlue-600 hover:bg-companyBlue-150 py-3 px-4 leading-tight text-xl"
                        type="button" data-bs-target="#contact">
                        <a href="#Contact">
                            Связаться с нами
                        </a>
                    </button>
                </div>
            </section>
        );
    }
}
