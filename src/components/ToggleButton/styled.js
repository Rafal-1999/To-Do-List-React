import styled from "styled-components";

export const ToggleButtonLabel = styled.label`
    width: 60px;
    height: 30px;
    background: rgb(218, 22, 41);
    border-radius: 50px;
    box-shadow:
        0px 2px 5px 1px rgba(20, 20, 20, 0.75) inset,
        0px -2px 5px 1px rgba(20, 20, 20, 0.75) inset;
    display: block;
    position: relative;
    transition: all 0.3s linear;
    z-index: 1;
    cursor: pointer;

    &::before {
        content: "";
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        margin: auto 0;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 5px;
        bottom: 0;
        transition: all 0.3s linear;
    }

    &::after {
        content: "\\e803";
        width: 50%;
        height: 100%;
        color: rgb(255, 255, 255);
        font-family: fontello;
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.15s linear;
        transition-delay: 0.15s;
    }
`;

export const ToggleButtonCheckbox = styled.input`
    display: none;

    &:checked + ${(ToggleButtonLabel)} {
        background: rgb(33, 166, 42);
    }

    &:checked + ${(ToggleButtonLabel)}::before {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    &:checked + ${(ToggleButtonLabel)}::after {
        content: "\\e801";
        width: 50%;
        height: 100%;
        color: rgb(0, 0, 0);
        font-family: fontello;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.15s linear;
        transition-delay: 0.15s;
    }
`;
