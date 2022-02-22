import { MetadataConsts } from '../../types/chains-config';
import { extrinsicBaseWeight } from './substrateConsts';

export const centrifugeChainDefinitions: MetadataConsts[] = [
	{
		runtimeVersions: [245],
		extrinsicBaseWeight,
	},
];
