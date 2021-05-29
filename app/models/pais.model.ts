//Este archivo no se toca :)
export interface Pais {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number | null;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    null | string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           null | string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: null | string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: string[];
    otherNames:    any[];
}

export interface Translations {
    de: null | string;
    es: string;
    fr: null | string;
    ja: null | string;
    it: null | string;
    br: string;
    pt: string;
    nl: null | string;
    hr: string;
    fa: string;
}