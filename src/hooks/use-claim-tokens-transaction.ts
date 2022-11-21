import { Contract, ContractTransaction } from 'ethers';

import { JsonRpcSigner } from '@ethersproject/providers';
import { useConfig } from './use-config';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useClaimTokensTransaction = async (
    signer: JsonRpcSigner,
): Promise<ContractTransaction> => {
    const { vestingScheduleAddress } = useConfig();
    const vestingScheduleContract = new Contract(
        vestingScheduleAddress,
        vestingScheduleAbi,
        signer,
    );

    return await vestingScheduleContract.claimAllTokens();
};
