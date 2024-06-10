import * as Node from '$lib/nodes/Node';

let nodes: Node.GatheringNode[] = [
	new Node.GatheringNode(
		'Rarified Sykon',
		'Elpis',
		new Node.Coordinates(25, 5, 0),
		87,
		'',
		Node.GatheringNodeType.Unspoiled,
		Node.Expansion.Endwalker,
		[12, 24]
	),
	new Node.GatheringNode(
		'Rarified Elder Nutmeg',
		'Elpis',
		new Node.Coordinates(25, 5, 0),
		90,
		'',
		Node.GatheringNodeType.Unspoiled,
		Node.Expansion.Endwalker,
		[12,24]
	)
];

export default nodes;
