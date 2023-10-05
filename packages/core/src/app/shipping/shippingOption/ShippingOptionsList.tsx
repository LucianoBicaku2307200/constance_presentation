import { ShippingOption } from '@bigcommerce/checkout-sdk';
import React, { FunctionComponent, memo, useCallback } from 'react';

import { EMPTY_ARRAY } from '../../common/utility';
import { Checklist, ChecklistItem } from '../../ui/form';
import { LoadingOverlay } from '../../ui/loading';

import StaticShippingOption from './StaticShippingOption';

interface ShippingOptionListItemProps {
    consignmentId: string;
    shippingOption: ShippingOption;
}

const ShippingOptionListItem: FunctionComponent<ShippingOptionListItemProps> = ({
    consignmentId,
    shippingOption,
}) => {
    const renderLabel = useCallback(
        () => (
            <div className="shippingOptionLabel">
                <StaticShippingOption displayAdditionalInformation={true} method={shippingOption} />
            </div>
        ),
        [shippingOption],
    );

    return (
        <ChecklistItem
            htmlId={`shippingOptionRadio-${consignmentId}-${shippingOption.id}`}
            label={renderLabel}
            value={shippingOption.id}
        />
    );
};

export interface ShippingOptionListProps {
    consignmentId: string;
    inputName: string;
    isLoading: boolean;
    selectedShippingOptionId?: string;
    shippingOptions?: ShippingOption[];
    onSelectedOption(consignmentId: string, shippingOptionId: string): void;
}

const ShippingOptionsList: FunctionComponent<ShippingOptionListProps> = ({
    consignmentId,
    inputName,
    isLoading,
    shippingOptions = EMPTY_ARRAY,
    selectedShippingOptionId,
    onSelectedOption,
}) => {
    const handleSelect = useCallback(
        (value: string) => {
            onSelectedOption(consignmentId, value);
        },
        [consignmentId, onSelectedOption],
    );

    if (!shippingOptions.length) {
        return null;
    }
 
    const freeShipping = shippingOptions.filter((el) => el.type == 'freeshipping');
    const flatRate = shippingOptions.filter((el) => el.type == "shipping_flatrate" && !el.description.includes("COD"));

    return (
      <LoadingOverlay isLoading={isLoading}>
        <Checklist
          aria-live="polite"
          defaultSelectedItemId={flatRate.length ? flatRate[0].id : selectedShippingOptionId}
          name={inputName}
          onSelect={handleSelect}
        >
          {freeShipping.length
            ? freeShipping.map((shippingOption) => (
                <ShippingOptionListItem
                  consignmentId={consignmentId}
                  key={shippingOption.id}
                  shippingOption={shippingOption}
                />
              ))
            : flatRate.map((shippingOption) => (
                <ShippingOptionListItem
                  consignmentId={consignmentId}
                  key={shippingOption.id}
                  shippingOption={shippingOption}
                />
              ))}
        </Checklist>
      </LoadingOverlay>
    );
};

export default memo(ShippingOptionsList);
