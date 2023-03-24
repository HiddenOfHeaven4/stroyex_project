import React from 'react'


export default class BannerCookie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAccept: !!localStorage.getItem('cookiesAccepted')
        };
    }

    onClick = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        this.setState({isAccept: true});
    }

    render() {
        return (
            <div>
                {!this.state.isAccept ?
                    <div
                        className="fixed left-0 bottom-0 right-0 px-4 pt-2 pb-4 md:py-2 bg-companyBlue-700 z-10 border-t border-blue-700 text-center flex flex-col-reverse md:flex-row items-center justify-center text-white"
                        id="cookie-consent">
                        <div className="flex flex-row flex-wrap content-center"><p>Этот веб-сайт использует cookies</p>
                            <p className="grow-0 text-left"> &nbsp; чтобы обеспечить Вам максимальное удобство на нашем веб-сайте.</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="px-6 pt-2 pb-4 md:px-0 md:pt-0 md:pb-0" data-behavior="accept-cookie-consent">
                                <button
                                    className="md:mb-0 ml-0 md:ml-4 px-3 py-1 border-companyBlue-600 rounded-lg bg-companyBlue-100 text-companyBlue-700 hover:bg-companyBlue-150 text-xl"
                                    onClick={this.onClick}
                                >
                                    Принять
                                </button>
                            </div>
                        </div>
                    </div>
                    : ''
                }
            </div>
        );
    }
}
