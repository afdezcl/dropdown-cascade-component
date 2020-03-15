export interface ProvinceI {
    id: number;
    name: string;
}

export interface CityI {
    id: number;
    provinceId: number;
    name: string;
}