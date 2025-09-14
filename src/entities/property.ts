type PropertyProps = {
	id?: string;
	name: string;
	totalValue: number;
	rentValue: number;
	condoValue: number;
	taxValue: number;
	numberOfRooms: number;
	numberOfBathrooms: number;
	garageSlots: number;
	arePetsAllowed: boolean;
	isNextToSubway: boolean;
	isActive: boolean;
	isSale: boolean;
	isRent: boolean;
	description: string;
	size: number;
	address: string;
	latitude: number;
	longitude: number;
	isFurnished: boolean;
	createdAt?: Date;
	updatedAt?: Date;
};

export class Property {
	public id?: string;
	public name: string;
	public totalValue: number;
	public rentValue: number;
	public condoValue: number;
	public taxValue: number;
	public numberOfRooms: number;
	public numberOfBathrooms: number;
	public garageSlots: number;
	public arePetsAllowed: boolean;
	public isNextToSubway: boolean;
	public isActive: boolean;
	public isSale: boolean;
	public isRent: boolean;
	public description: string;
	public size: number;
	public createdAt?: Date;
	public updatedAt?: Date;
	public address: string;
	public latitude: number;
	public longitude: number;
	public isFurnished: boolean;

	constructor(props: PropertyProps) {
		this.id = props.id;
		this.name = props.name;
		this.totalValue = props.totalValue;
		this.rentValue = props.rentValue;
		this.condoValue = props.condoValue;
		this.taxValue = props.taxValue;
		this.numberOfRooms = props.numberOfRooms;
		this.numberOfBathrooms = props.numberOfBathrooms;
		this.garageSlots = props.garageSlots;
		this.arePetsAllowed = props.arePetsAllowed;
		this.isNextToSubway = props.isNextToSubway;
		this.isActive = props.isActive;
		this.isSale = props.isSale;
		this.isRent = props.isRent;
		this.description = props.description;
		this.size = props.size;
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
		this.address = props.address;
		this.latitude = props.latitude;
		this.longitude = props.longitude;
		this.isFurnished = props.isFurnished;
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
	}
}
