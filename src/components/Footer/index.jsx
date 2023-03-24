import React from 'react';


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-bottomBlack">
                <div className="container sm:px-4 mx-auto text-center py-10">
                    <div className="flex flex-row flex-wrap text-white content-center place-content-center">
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Юридический адрес</h5>
                            <ul>
                                <li><a className="text-sm">109429, город Москва, ул. Верхние Поля, д. 61 стр. 1, этаж/офис 2/с1.65</a></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/4 px-4 py-2">
                            <h5 className="font-semibold py-2">Электронная почта</h5>
                            <ul>
                                <li><a href="mailto:info@quic.pro">stroyeks-t@bk.ru<br /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-bottomBlack-100 py-3">
                    <p className="text-white text-center">© ГСК СТРОЙЭКСПЕРТ 2022</p>
                </div>
            </footer>
        );
    }
}
