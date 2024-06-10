export class GatheringNode {
	readonly name: string;
	readonly location: string;
	readonly coordinates: Coordinates;
	readonly nodeLevel: number;
	readonly bonus: string;
	readonly type: GatheringNodeType;
	readonly expansion: Expansion;
	readonly times: number[];

	constructor(
		name: string,
		location: string,
		coodinates: Coordinates,
		nodeLevel: number,
		bonus: string,
		type: GatheringNodeType,
		expansion: Expansion,
		times: number[]
	) {
		this.name = name;
		this.location = location;
		this.coordinates = coodinates;
		this.nodeLevel = nodeLevel;
		this.bonus = bonus;
		this.type = type;
		this.expansion = expansion;
		this.times = times;
	}
}

export class Coordinates {
	readonly x: number;
	readonly y: number;
	readonly z: number;

	constructor(x: number, y: number, z: number){
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

export enum GatheringNodeType {
	Unspoiled = 1,
	Ephemeral = 2,
	Folklore = 3
}

export enum Expansion {
	Base = 1,
	Heavensward = 2,
	Stormblood = 3,
	Shadowbringers = 4,
	Endwalker = 5,
	Dawntrail = 6
}
