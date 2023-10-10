import { User } from 'firebase/auth';

export interface Card {
  type: string;
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  orientation?: 'up' | 'reversed';
  image: string;
}

export interface CombinedUser {
  firebase: User;
  google: {
    id: string;
    name: string | null;
    email: string;
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
  };
}
