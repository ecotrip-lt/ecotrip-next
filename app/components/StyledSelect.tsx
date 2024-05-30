/* eslint-disable react/display-name */
// import merge from 'lodash-es/merge';
import Select, { Props } from 'react-select';
import React, { forwardRef } from 'react';
// import { styleProps } from './ReactSelectStyleProps';
// import SimpleTextError from '../../errors/SimpleTextError';

export default forwardRef(
	(
		props: Props & {
			label?: string;
			testId?: string;
			errorMessage?: string;
		},
		// Type is RefCallBack from react-hook-form
		// Type does not work with spread syntax.
		ref: any
	) => {
		// styleProps must come first so that they could be overwritten by props
		// the first argument must be an empty object, otherwise the merge will mutate the styleProps object
		// causing all react-selects to share properties.
		// const mergedProps = merge({}, styleProps, props);
		return (
			<div className='w-100'>
				<Select
					ref={ref}
					placeholder={false}
					// {...mergedProps}
					{...props}
					aria-label={`${props.name}`}
					// data-cy={props.testId || props.name}
				/>
				{/* <SimpleTextError message={props.errorMessage} /> */}
			</div>
		);
	}
);
