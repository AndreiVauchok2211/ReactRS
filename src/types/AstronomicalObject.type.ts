export type AstronomicalObject = {
  uid: string;
  name: string;
  astronomicalObjectType: AstronomicalObjectType;
  location: {
    uid: string;
    name: string;
  };
};

export type AstronomicalObjectType =
  | 'COMET'
  | 'GALAXY'
  | 'NEBULA'
  | 'PLANET'
  | 'REGION'
  | 'SECTOR'
  | 'STAR_SYSTEM';
