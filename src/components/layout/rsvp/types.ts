export interface Invite {
  _id: string;
  fullName: string;
  possiblePlusOne?: string;
  actualPlusOne?: string;
  guestOf: 'bride' | 'groom';
  rsvp: 'attending' | 'not-attending' | null;
  children?: Child[];
  dietaryRestrictions?: DietaryRestriction[];
  email?: string;
}

export interface Child {
  fullName: string;
}

export interface DietaryRestriction {
  guestName: string;
  restriction: string;
}

export interface RsvpFormData {
  fullName: string;
  isAttending?: boolean;
  keepingPlusOne?: boolean;
  newPlusOne?: string;
  hasChildren?: boolean;
  children?: Child[];
  hasDietaryRestrictions?: boolean;
  dietaryRestrictions?: DietaryRestriction[];
  email?: string;
}

export interface RsvpPayload {
  invitation: string;
  fullName: string;
  email?: string;
  attending: boolean;
  plusOne?: {
    fullName?: string;
    dietaryRestrictions?: string;
  };
  children?: Array<{
    name: string;
    dietaryRestrictions?: string;
  }>;
  dietaryRestrictions?: string;
  additionalNotes?: string;
}
