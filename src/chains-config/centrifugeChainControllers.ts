import { ControllerConfig } from '../types/chains-config';
import { initLRUCache } from './cache/lruCache';
import { getBlockWeight } from './metadata-consts';

/**
 * Controllers for Centrifuge collator
 */
export const centrifugeChainControllers: ControllerConfig = {
	controllers: [
		'AccountsBalanceInfo',
		'AccountsValidate',
		'Blocks',
		'BlocksExtrinsics',
		'NodeNetwork',
		'NodeTransactionPool',
		'NodeVersion',
		'PalletsStorage',
		'Paras',
		'RuntimeCode',
		'RuntimeMetadata',
		'RuntimeSpec',
		'TransactionDryRun',
		'TransactionFeeEstimate',
		'TransactionMaterial',
		'TransactionSubmit',
	],
	options: {
		finalizes: true,
		minCalcFeeRuntime: 245,
		blockWeightStore: getBlockWeight('centrifuge-chain'),
		blockStore: initLRUCache(),
	},
};
