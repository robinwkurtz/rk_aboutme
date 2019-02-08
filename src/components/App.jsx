// @flow

import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

import { Container, GlobalStyle, InnerContainer, Title, Body, Icon, ButtonThumbnail, Controls, Control, Transition, Bracket } from './styles';

import codeigniterIcon from '../assets/images/codeigniter.svg';
import cssIcon from '../assets/images/css.svg';
import dockerIcon from '../assets/images/docker.svg';
import gitIcon from '../assets/images/git.svg';
import gulpIcon from '../assets/images/gulp.svg';
import htmlIcon from '../assets/images/html.svg';
import immutableIcon from '../assets/images/immutable.svg';
import jqueryIcon from '../assets/images/jquery.svg';
import laravelIcon from '../assets/images/laravel.svg';
import mailchimpIcon from '../assets/images/mailchimp.svg';
import oracleIcon from '../assets/images/oracle.svg';
import phpIcon from '../assets/images/php.svg';
import reactIcon from '../assets/images/react.svg';
import reduxIcon from '../assets/images/redux.svg';
import sassIcon from '../assets/images/sass.svg';
import slicingIcon from '../assets/images/slicing.svg';
import terminalIcon from '../assets/images/terminal.svg';
import wordpressIcon from '../assets/images/wordpress.svg';

import camelliaSinensisThumb from '../assets/images/camellia-sinensis.jpg';
import cassisEtMelisseThumb from '../assets/images/cassis-et-melisse.jpg';
import cassisEtMelisseWeb from '../assets/images/cassis-et-melisse-web.jpg';
import cassisEtMelisseWebAlt from '../assets/images/cassis-et-melisse-web-alt.jpg';
import delicesDeMicheleThumb from '../assets/images/delices-de-michele.jpg';
import delicesDeMicheleWebGIF from '../assets/images/delices-de-michele-web.gif';
import escuminacThumb from '../assets/images/escuminac.jpg';
import premiumBeatThumb from '../assets/images/premium-beat.jpg';

import leftIcon from '../assets/images/arrow-left.svg';
import homeIcon from '../assets/images/home.svg';
import rightIcon from '../assets/images/arrow-right.svg';

type State = {
    currentSlide: number,
    lastSlide: number,
};

export default class App extends React.Component<null, State> {
    state = {
        currentSlide: 0,
        lastSlide: 16,
    };

    handlePrevSlide = () => {
        const { currentSlide } = this.state;
        if (currentSlide >= 0) {
            this.setState((prevState: { currentSlide: number }) => (
                { currentSlide: prevState.currentSlide - 1 }
            ));
        }
    };

    handleHomeSlide = () => {
        this.setState({ currentSlide: 0 });
    };

    handleNextSlide = () => {
        const { currentSlide, lastSlide } = this.state;
        if (currentSlide < lastSlide) {
            this.setState((prevState: { currentSlide: number }) => (
                { currentSlide: prevState.currentSlide + 1 }
            ));
        }
    };

    handleKeyDown = (event: Event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            this.handleNextSlide();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            this.handlePrevSlide();
        }
    };

    renderSlide = () => {
        let slide;
        switch (this.state.currentSlide) {
            default:
                slide = (
                    <div>
                        <Title>Hello!</Title>
                        <Body>This is how I became a developer in 1993 days, give or take a few</Body>
                    </div>
                );
                break;
            case 1:
                slide = (
                    <div>
                        <Title>2012</Title>
                        <Body>Graduated from Graphic Design at Dawson college</Body>
                    </div>
                );
                break;
            case 2:
                slide = (
                    <div>
                        <Title>Branding</Title>
                        <Body>I had the opportunity to work on some great brands, a few I can call my own</Body>
                        <Body>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/27618719/Escuminac-Visual-Identity-Packaging"
                                target="_blank"
                            >
                                <img src={escuminacThumb} alt="Escuminac" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/27845443/Premium-Beat-Visual-Identity-platform"
                                target="_blank"
                            >
                                <img src={premiumBeatThumb} alt="Premium Beat" />
                            </ButtonThumbnail>
                        </Body>
                    </div>
                );
                break;
            case 3:
                slide = (
                    <div>
                        <Title>Package design</Title>
                        <Body>From designing labels, to building out box dies</Body>
                        <Body>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/9979453/Dlices-de-Michele-Brand-Identity-Packagings"
                                target="_blank"
                            >
                                <img src={delicesDeMicheleThumb} alt="Délices de Michèle" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/14655675/Camellia-Sinensis-Packagings"
                                target="_blank"
                            >
                                <img src={camelliaSinensisThumb} alt="Camellia Sinensis" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/33883306/Cassis-et-Mlisse-Packagings"
                                target="_blank"
                            >
                                <img src={cassisEtMelisseThumb} alt="Cassis et Melisse" />
                            </ButtonThumbnail>
                        </Body>
                    </div>
                );
                break;
            case 4:
                slide = (
                    <div>
                        <Title>Basic websites</Title>
                        <Body>Built with HTML & CSS only! (Yes, it’s sadly true)</Body>
                        <Body>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/33883306/Cassis-et-Mlisse-Packagings"
                                target="_blank"
                            >
                                <img src={cassisEtMelisseWebAlt} alt="" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/33883306/Cassis-et-Mlisse-Packagings"
                                target="_blank"
                            >
                                <img src={cassisEtMelisseWeb} alt="" />
                            </ButtonThumbnail>
                            <br />
                            <ButtonThumbnail
                                href="https://www.behance.net/gallery/9979453/Dlices-de-Michele-Brand-Identity-Packagings"
                                target="_blank"
                            >
                                <img src={delicesDeMicheleWebGIF} alt="" />
                            </ButtonThumbnail>
                        </Body>
                    </div>
                );
                break;
            case 5:
                slide = (
                    <div>
                        <Title>Wait a minute...</Title>
                        <Body>Development is pretty cool, let’s learn more!</Body>
                    </div>
                );
                break;
            case 6:
                slide = <Title>February 2014</Title>;
                break;
            case 7:
                slide = (
                    <div>
                        <Title>More skillzzz</Title>
                        <Body>Learned how to build out custom themes in wordpress and other basic PHP websites</Body>
                        <Body>
                            <Icon src={wordpressIcon} alt="Wordpress" />
                            <Bracket>[</Bracket>
                            <Icon src={phpIcon} alt="PHP" />
                            <Icon src={htmlIcon} alt="HTML" portrait />
                            <Icon src={sassIcon} alt="Sass" />
                            <Icon src={cssIcon} alt="CSS" portrait />
                            <Icon src={jqueryIcon} alt="jQuery" />
                            <Bracket>]</Bracket>
                        </Body>
                    </div>
                );
                break;
            case 8:
                slide = (
                    <div>
                        <Title>Oops...</Title>
                        <Body>Things got stale & repetitive... little room to improve & learn more</Body>
                    </div>
                );
                break;
            case 9:
                slide = <Title>March 2016</Title>;
                break;
            case 10:
                slide = (
                    <div>
                        <Title>The marketing side of things</Title>
                        <Body>Interesting but a not very devvy? (developer-like)</Body>
                        <Body>
                            <Icon src={mailchimpIcon} alt="Mailchimp" />
                            <Icon src={oracleIcon} alt="Orcale's Responsys" landscape />
                        </Body>
                    </div>
                );
                break;
            case 11:
                slide = (
                    <div>
                        <Title>Hmm...</Title>
                        <Body>And some not so great things like legacy code & old tech</Body>
                        <Body>
                            <Icon src={codeigniterIcon} alt="Codeigniter v2" />
                            <Icon src={slicingIcon} alt="Slicing in Photoshop" />
                            <Icon src={gulpIcon} alt="Gulp" portrait />
                        </Body>
                    </div>
                );
                break;
            case 12:
                slide = (
                    <div>
                        <Title>Intro to React</Title>
                        <Body>Damn... this is pretty neat!</Body>
                        <Body>
                            <Icon src={reactIcon} alt="React" />
                        </Body>
                    </div>
                );
                break;
            case 13:
                slide = (
                    <div>
                        <Title>Short lived?</Title>
                        <Body>Things got stale... little react, too much CI maintenance & CRM work</Body>
                    </div>
                );
                break;
            case 14:
                slide = <Title>February 2018</Title>;
                break;
            case 15:
                slide = (
                    <div>
                        <Title>Oh hi!</Title>
                        <Body>Awesome team, cool stack, endless potential?</Body>
                        <Body>
                            <Icon src={gitIcon} alt="Git" />
                            <Icon src={dockerIcon} alt="Docker" />
                            <Icon src={terminalIcon} alt="Temrinal" />
                            <br />
                            <Icon src={laravelIcon} alt="Laravel" />
                            <Icon src={reactIcon} alt="React" />
                            <Icon src={reduxIcon} alt="Redux" />
                            <Icon src={immutableIcon} alt="Immutable" landscape />
                        </Body>
                        <Body>And many more...</Body>
                    </div>
                );
                break;
            case 16:
                slide = (
                    <div>
                        <Title>Questions?</Title>
                        <Body>No? Well <strong>thank you</strong> for your time!</Body>
                        <Title><span role="img" aria-label="Grimace">😬</span></Title>
                    </div>
                );
                break;
        }
        return slide;
    };

    render() {
        const { currentSlide, lastSlide } = this.state;

        return (
            <Container
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
            >
                <GlobalStyle />
                <InnerContainer>
                    <CSSTransitionGroup
                        transitionName="slide"
                        transitionEnterTimeout={450}
                        transitionLeaveTimeout={450}
                        transitionLeave={false}
                    >
                        <Transition key={this.state.currentSlide}>
                            {this.renderSlide()}
                        </Transition>
                    </CSSTransitionGroup>
                </InnerContainer>
                <Controls>
                    <Control
                        disabled={currentSlide === 0}
                        onClick={this.handlePrevSlide}
                        type="button"
                    >
                        <img src={leftIcon} alt="Previous Slide" title="Previous Slide" />
                    </Control>
                    <Control
                        disabled={currentSlide === 0}
                        onClick={this.handleHomeSlide}
                        type="button"
                    >
                        <img src={homeIcon} alt="Home" title="Home" />
                    </Control>
                    <Control
                        disabled={currentSlide >= lastSlide}
                        onClick={this.handleNextSlide}
                        type="button"
                    >
                        <img src={rightIcon} alt="Next Slide" title="Next Slide" />
                    </Control>
                </Controls>
            </Container>
        );
    }
}
