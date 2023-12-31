import React, { FunctionComponent, memo } from 'react';

import { IconSize } from '@bigcommerce/checkout/ui';

import { getPaymentMethodIconComponent } from '../';

export interface CreditCardIconProps {
    cardType?: string;
}

const CreditCardIcon: FunctionComponent<CreditCardIconProps> = ({ cardType }) => {
    const iconProps = {
        additionalClassName: 'cardIcon-icon',
        size: IconSize.Medium,
        testId: `credit-card-icon-${cardType || 'default'}`,
    };

    const IconComponent = getPaymentMethodIconComponent(cardType);

    return IconComponent ? (
        <IconComponent {...iconProps} />
    ) : (
        <div className="cardIcon-icon cardIcon-icon--default icon icon--medium" />
    );
};

export default memo(CreditCardIcon);
