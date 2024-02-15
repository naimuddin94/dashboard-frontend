import { FC } from "react";

export interface IButtonProps{
    children: string,
    icon: FC
}

export interface ISelectGroupProps{
    label: string,
    options: string[],
    icon: FC
}