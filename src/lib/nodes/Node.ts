export class GatheringNode {
	readonly name: string;
	readonly location: string;
	readonly nodeLevel: string;
	readonly bonus: string;
	readonly type: GatheringNodeType;
	readonly expansion: Expansion;

	constructor(
		name: string,
		location: string,
		nodeLevel: string,
		bonus: string,
		type: GatheringNodeType,
		expansion: Expansion
	) {
		this.name = name;
		this.location = location;
		this.nodeLevel = nodeLevel;
		this.bonus = bonus;
		this.type = type;
		this.expansion = expansion;
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
