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
  bio: string,
  familyMember: boolean
};

export type Event = {
  participants: Array<Person>,
  location: string,
  date: string,
  title: string,
  creator: Person
};

export type Photo = { width: number, height: number, url: string };
