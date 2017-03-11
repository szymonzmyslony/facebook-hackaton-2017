/**
 *@providesModule Types
 * @flow
 */
export type Person = {
  name: string,
  surname: string,
  age: number,
  hometown: string,
  location: string,
  photo: Photo,
  bio: string
};

export type Event = {
  location: string,
  date: string,
  title: string
};

export type Photo = { width: number, height: number, url: string };
