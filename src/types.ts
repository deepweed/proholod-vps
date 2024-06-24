export interface Stats {
    isInventor: boolean;
    connectingPower: string | "Нет данных";
    recomendSquare: number | null;
    coolingKw: string;
    warmingKw: string;
    diameterOfCondensatePipe: string | "Нет данных";
    maxTrace: number;
    maxHeight: number;
    minTempCooling: number;
    maxTempCooling: number;
    minTempWarm: number;
    maxTempWarm: number;
    unitSoundLevel: string | "Нет данных";
    unitSoundLevelBlock: string | "Нет данных";
    b_temperatureInCamera: string | null;
    b_coolRoomValue: string | null;
    b_coolWarming: string | null;
    b_powerConsumption: string | null;
    b_nominalPower: string | null;
    b_NoiseLvl: string | null;
    b_WinterSet: string | null;
    b_TrackLenght: string | null;
    b_MaxTrackLenght: string | null;
    b_diametrPipes: string | null;
    width: string | null;
    widthPack: string | null;
    weight: string | null;
    weightPack: string | null;
    widthBlock: string | null;
    widthBlockPack: string | null;
    weightBlock: string | null;
    weightBlockPack: string | null;
}
  
export interface Image {
    id: number;
    imagePath: string[];
    productId: number;
}
  
export interface Product {
    id: number;
    isInStock: boolean;
    title: string;
    brand: string;
    description: string;
    href: string;
    category: string;
    cost: number;
    series: string | null;
    images: Image[];
    stats: Stats[];
}
  