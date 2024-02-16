import { FC } from 'react';
import { Package } from './package';

export interface IButtonProps {
  children: string;
  icon: FC;
}

export interface ISelectGroupProps {
  label: string;
  name: string;
  options: string[];
  icon: FC;
}

export interface ITableThreeProps {
  data: Package[];
  customerTable?: boolean;
}

export interface ICountryPriceList{
  name: string;
  price: number;
  status: string
}