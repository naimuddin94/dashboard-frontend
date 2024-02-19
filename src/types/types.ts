import { FC } from 'react';
import { Package } from './package';
import { User, UserCredential } from 'firebase/auth';
import { ReactNode } from 'react';
export interface IService {
  _id?: string;
  image: string;
  serviceName: string;
  description: string;
  providerImage: string;
  providerName?: string;
  providerEmail?: string;
  tourArea: string;
  price: number;
  status?: string;
}

export interface IServiceProps {
  service: IService;
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logOut: () => Promise<UserCredential>;
  setLoading: (loading: boolean) => void;
  name: string | undefined | null;
  setName: (name: string | undefined | null) => void;
  photo: string | undefined | null;
  setPhoto: (photo: string | undefined | null) => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

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

export interface ICountryPriceList {
  name: string;
  price: number;
  status: string;
}

export interface ICountries {
  _id: string;
  created_at: Date;
  name: string;
  code: string;
}

export interface ILeader {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  whatsapp: string;
  skype: string;
  photo: string;
  NIDCopy: string;
  country: string;
  city: string;
  state?: string;
  fullAddress: string;
  nidNumber: string;
  email: string;
  password: string;
}
