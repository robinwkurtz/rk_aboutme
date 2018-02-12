// @flow

import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    html,
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: #5EECBD;
    }

    #root {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .slide-enter {
        opacity: 0;
        transform: translate3d(0,-100%,0);
    }

    .slide-enter.enter-active {
        opacity: 1;
        transform: translate3d(0,0,0);
    }

    .slide-leave {
        opacity: 0;
        transition-duration: 0s;
    }
`;

export const Container = styled.div`
    display: table;

    width: 90%;
    max-width: 960px;
    height: 100%;
    min-height: 300px;

    margin: 0 auto;
    padding-bottom: 32px;

    &:focus {
        outline: none;
    }
`;

export const InnerContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

export const Title = styled.h1`
    margin: 0.5em 0;
    font-size: 3em;
    text-align: center;
`;

export const Body = styled.p`
    margin: 0.5em 0;
    font-size: 1.5em;
    text-align: center;
`;

export const Icon = styled.img`
    display: inline-block;
    vertical-align: middle;
    margin: 10px 20px;
    width: 100px;
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

    margin: 10px 20px;

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
    transition: all ease 0.35s;
`;
