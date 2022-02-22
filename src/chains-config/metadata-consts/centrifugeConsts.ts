import { MetadataConsts } from '../../types/chains-config';
import { extrinsicBaseWeight } from './substrateConsts';

export const centrifugeDefinitions: MetadataConsts[] = [
	{
		runtimeVersions: [245],
		extrinsicBaseWeight,
	},
];
