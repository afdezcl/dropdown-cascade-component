export interface ProvinceI {
    id: string;
    name: string;
}

export interface CityI {
    id: string;
    provinceId: string;
    cmun: string;
    dc: string;
    name: string;
}