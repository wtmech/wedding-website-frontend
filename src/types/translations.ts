export interface Translations {
  common: {
    at: string;
    and: string;
    back: string;
    continue: string;
    notFound: {
      title: string;
      text: string;
    };
  };
  navigation: {
    home: string;
    gettingThere: string;
    thingsToDo: string;
    rsvp: string;
    menuButton: string;
  };
  home: {
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    weddingDetails: {
      title: string;
      date: {
        title: string;
        value: string;
        time: string;
        dateAndTime: string;
      };
      venue: {
        title: string;
        name: string;
        address: string;
      };
      dress: {
        title: string;
        text: string;
      };
    };
  };
  gettingThere: {
    title: string;
    byPlane: {
      title: string;
      text: string;
      airport: string;
      rentalCars: string;
    };
    byCar: {
      title: string;
      fromCatanzaro: string;
      fromMagisano: string;
      googleMaps: string;
    };
    accommodation: {
      title: string;
      distanceNote: string;
      categories: {
        threeStar: string;
        fourStar: string;
        bedAndBreakfast: string;
      };
      emailToBook: string;
    };
    byTrain: {
      title: string;
      text: string;
      to: string;
      stations: {
        termini: string;
        tiburtina: string;
        lamezia: string;
      };
      companies: {
        text: string;
        italo: string;
        trenitalia: string;
      };
    };
  };
  thingsToDo: {
    title: string;
    coastOfGods: {
      title: string;
      text: string;
    };
    scilla: {
      title: string;
      text: string;
    };
    sanNicolaArcella: {
      title: string;
      text: string;
    };
    ionianCoast: {
      title: string;
      text: string;
    };
    nationalParks: {
      title: string;
      text: string;
    };
  };
  rsvp: {
    title: string;
    form: {
      fullName: string;
      search: string;
      attending: {
        question: string;
        yes: string;
        no: string;
      };
      plusOne: {
        question: string;
        newQuestion: string;
        enterName: string;
        namePlaceholder: string;
        yes: string;
        no: string;
      };
      children: {
        question: string;
        enterNames: string;
        addChild: string;
        childPlaceholder: string;
        yes: string;
        no: string;
        howMany: string;
      };
      dietary: {
        question: string;
        seafoodNote: string;
        title: string;
        instructions: string;
        detailsPlaceholder: string;
        yes: string;
        no: string;
      };
      additionalNotes: {
        question: string;
        placeholder: string;
      };
      submit: string;
      success: {
        attending: string;
        notAttending: string;
      };
      error: {
        emptyName: string;
        nameNotFound: string;
        alreadyRsvped: string;
      };
    };
  };
}

export type TranslationFile = { default: Translations };