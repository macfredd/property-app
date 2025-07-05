export interface Property {
    id: number;
    typeId: number;
    ownerId: number;
    priceUSD: number;
    builtArea: number;
    totalArea: number;
    title: string;
    address: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    rooms: number;
    bathrooms: number;
    wifi: boolean;
    createdAt: string;
    highlighted: boolean;
}
