// @flow

import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    html,
    body {
        height: 100%;
        width: 100%;
    }

    #root {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .slide-enter {
        opacity: 0;
        transform: translate3d(20px,0,0);
      }

    .slide-enter.enter-active {
        opacity: 1;
        transform: translate3d(0,0,0);
    }

    .slide-leave {
        opacity: 1;
    }

    .slide-leave.leave-active {
        opacity: 0.01;
    }
`;

export const Container = styled.div`
    display: table;

    width: 90%;
    max-width: 960px;
    height: 100%;
    min-height: 300px;

    margin: 0 auto;
    padding-bottom: 70px;

    &:focus {
        outline: none;
    }
`;

export const InnerContainer = styled.div`
    display: table-cell;
    vertical-align: middle;

    overflow: hidden;
`;

export const Title = styled.h1`
    margin: 0.5em 0;
    font-size: 3em;
    text-align: center;

    text-shadow: 2px 2px 8px rgba(0,0,0,.15)
`;

export const Body = styled.p`
    margin: 0.5em 0;
    font-size: 1.5em;
    text-align: center;

    text-shadow: 2px 2px 8px rgba(0,0,0,.15);
`;

export const Icon = styled.img`
    display: inline-block;
    vertical-align: middle;
    margin: 10px 30px;
    ${(props) => !props.portrait && !props.landscape && `
        width: 100px;
    `};
    ${(props) => props.portrait && `
        height: 110px;
    `};
    ${(props) => props.landscape && `
        width: 160px;
    `};
`;

export const ButtonThumbnail = styled.a`
    position: relative;

    top: 0;
    left: 0;

    display: inline-block;
    vertical-align: middle;

    width: 300px;

    > img {
        display: block;
        width: 100%;
    }

    margin: 10px;

    background-color: transparent;
    border: 4px solid white;
    color: white;

    cursor: pointer;

    text-decoration: none;
    text-transform: lowercase;

    opacity: 1;

    transition: all ease 0.25s;

    &:before,
    &:after {
        content: '';
        position: absolute;

        background-color: white;
    }

    &:before {
        bottom: -8px;
        right: -8px;
        left: 4px;

        height: 4px;

        transition: all ease 0.25s;
    }

    &:after {
        top: 4px;
        right: -8px;
        bottom: -8px;

        width: 4px;

        transition: all ease 0.25s;
    }

    &:hover {

        top: 4px;
        left: 4px;

        transition: all ease 0.25s;

        &:before {
            right: -4px;
            bottom: -4px;
            transition: all ease 0.25s;
        }
        &:after {
            right: -4px;
            bottom: -4px;
            transition: all ease 0.25s;
        }
    }
`;

export const Controls = styled.div`
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;

    text-align: center;
`;

export const Control = styled.button`
    display: inline-block;
    vertical-align: middle;

    width: 40px;

    background-color: transparent;
    border: 0 none;
    appearance: none;

    cursor: pointer;

    ${(props) => props.disabled && `
        opacity: .5;
        cursor: default;
    `}

    &:focus {
        outline: none;
    }

    > img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

export const Transition = styled.div`
    transition: all 450ms ease;
`;

export const Bracket = styled.span`
    font-size: 64px;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 10px;
`;
