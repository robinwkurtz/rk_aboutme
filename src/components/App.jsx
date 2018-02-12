// @flow

import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

import { Container, InnerContainer, Title, Body, Icon, ButtonThumbnail, Controls, Control, Transition } from './styles';

import codeigniterIcon from '../assets/images/codeigniter.svg';
import compassIcon from '../assets/images/compass.svg';
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

import escuminacThumb from '../assets/images/escuminac.jpg';
import premiumBeatThumb from '../assets/images/premium-beat.jpg';
import delicesDesMicheleThumb from '../assets/images/delices-des-michele.jpg';
import camelliaSinensisThumb from '../assets/images/camellia-sinensis.jpg';
import cassisEtMelisseThumb from '../assets/images/cassis-et-melisse.jpg';
import delicesDesMicheleWeb from '../assets/images/delices-des-michele-web.jpg';
import cassisEtMelisseWeb from '../assets/images/cassis-et-melisse-web.jpg';


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
        lastSlide: 15,
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
                    <React.Fragment>
                        <Title>Hello!</Title>
                        <Body>This is how I became a developer in 1993 (give or take) days</Body>
                    </React.Fragment>
                );
                break;
            case 1:
                slide = (
                    <React.Fragment>
                        <Title>2012</Title>
                        <Body>Graduated from Graphic Design at Dawson college</Body>
                    </React.Fragment>
                );
                break;
            case 2:
                slide = (
                    <React.Fragment>
                        <Title>Branding</Title>
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
                    </React.Fragment>
                );
                break;
            case 3:
                slide = (
                    <React.Fragment>
                        <Title>Package design</Title>
                        <Body>[Delice de Michelle] [Camelia Sinensis] [Point G]</Body>
                        <Body>
                            <ButtonThumbnail
                                href=""
                                target="_blank"
                            >
                                <img src={delicesDesMicheleThumb} alt="Délices de Michèle" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href=""
                                target="_blank"
                            >
                                <img src={camelliaSinensisThumb} alt="Camellia Sinensis" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href=""
                                target="_blank"
                            >
                                <img src={cassisEtMelisseThumb} alt="Cassis et Melisse" />
                            </ButtonThumbnail>
                        </Body>
                    </React.Fragment>
                );
                break;
            case 4:
                slide = (
                    <React.Fragment>
                        <Title>Basic websites in HTML & CSS</Title>
                        <Body>[Delice de Michelle] [Cassis et Melisse]</Body>
                        <Body>
                            <ButtonThumbnail
                                href=""
                                target="_blank"
                            >
                                <img src={delicesDesMicheleWeb} alt="" />
                            </ButtonThumbnail>
                            <ButtonThumbnail
                                href=""
                                target="_blank"
                            >
                                <img src={cassisEtMelisseWeb} alt="" />
                            </ButtonThumbnail>
                        </Body>
                    </React.Fragment>
                );
                break;
            case 5:
                slide = (
                    <React.Fragment>
                        <Title>Hey!</Title>
                        <Body>Development is pretty cool, let's learn more</Body>
                    </React.Fragment>
                );
                break;
            case 6:
                slide = (
                    <React.Fragment>
                        <Title>February 2014</Title>
                    </React.Fragment>
                );
                break;
            case 7:
                slide = (
                    <React.Fragment>
                        <Body>Learned how to build out custom themes in wordpress PHP, HTML & CSS -> SCSS w/compass</Body>
                        <Body>
                            <Icon src={phpIcon} alt="PHP" />
                            <Icon src={htmlIcon} alt="HTML" />
                            <Icon src={cssIcon} alt="CSS" />
                            <Icon src={jqueryIcon} alt="jQuery" />
                        </Body>
                    </React.Fragment>
                );
                break;
            case 8:
                slide = (
                    <React.Fragment>
                        <Title>Things got stale</Title>
                    </React.Fragment>
                );
                break;
            case 9:
                slide = (
                    <React.Fragment>
                        <Title>March 2016</Title>
                    </React.Fragment>
                );
                break;
            case 10:
                slide = (
                    <React.Fragment>
                        <Title>Moved in the marketing side of things</Title>
                        <Body>[Mailchimp] [Responsys]</Body>
                        <Body>
                            <Icon src={mailchimpIcon} alt="Mailchimp" />
                            <Icon src={oracleIcon} alt="Orcale's Responsys" />
                        </Body>
                    </React.Fragment>
                );
                break;
            case 11:
                slide = (
                    <React.Fragment>
                        <Title>And some not so great things...</Title>
                        <Body>[Codeigniter 2] [Slicing in Photoshop]</Body>
                        <Body>
                            <Icon src={codeigniterIcon} alt="Codeigniter" />
                        </Body>
                    </React.Fragment>
                );
                break;
            case 12:
                slide = (
                    <React.Fragment>
                        <Title>Intro to React</Title>
                        <Body>[React]</Body>
                        <Body>
                            <Icon src={reactIcon} alt="React" />
                        </Body>
                        <Body>Damn... this is pretty neat!</Body>
                    </React.Fragment>
                );
                break;
            case 13:
                slide = (
                    <React.Fragment>
                        <Body>Things got stale... little react, too much CI maintenance & Responsys</Body>
                    </React.Fragment>
                );
                break;
            case 14:
                slide = (
                    <React.Fragment>
                        <Title>February 2018</Title>
                    </React.Fragment>
                );
                break;
            case 15:
                slide = (
                    <React.Fragment>
                        <Title>Awesome team, cool stack, endless potential?</Title>
                        <Body>[React] [Laravel] [Docker] [Git]/[Command Line]</Body>
                        <Body>
                            <Icon src={dockerIcon} alt="Docker" />
                            <Icon src={laravelIcon} alt="Laravel" />
                            <Icon src={reactIcon} alt="React" />
                            <Icon src={reduxIcon} alt="Redux" />
                            <Icon src={gitIcon} alt="Git" />
                        </Body>
                    </React.Fragment>
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
                <InnerContainer>
                    <CSSTransitionGroup
                        transitionName="slide"
                        transitionEnterTimeout={300}
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
