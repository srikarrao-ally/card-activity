import { useCallback, useState } from 'react';

import { SwapWidget } from '@uniswap/widgets';
import { useConfig } from '../../hooks/use-config';

export const SwapCustomWidget = () => {
    const { lakeAddress } = useConfig();
    const [defaultOutputTokenAddress, setDefaultOutputTokenAddress] = useState(
        '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    );
    const onTokenSelectorClick = useCallback(
        (e: any) =>
            setDefaultOutputTokenAddress(
                '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
            ),
        [],
    );
    return (
        <div className="Uniswap">
            <SwapWidget
                defaultOutputTokenAddress={defaultOutputTokenAddress}
                hideConnectionUI={true}
                onTokenSelectorClick={onTokenSelectorClick}
            />
        </div>
    );
};
