import { Card, FlexChild, FlexLayout, TextField } from '@cedcommerce/ounce-ui'
import React, { useState } from 'react'
import { FiDollarSign } from "react-icons/fi";

const Tab3 = () => {
	const [changeValue1, setChangeValue1] = useState();
	const [changeValue2, setChangeValue2] = useState();
	const [changeValue3, setChangeValue3] = useState();
	const [changeValue4, setChangeValue4] = useState();
	return (
		<Card title='Shipping'>
			<FlexLayout direction='vertical' spacing='extraLoose'>
				<FlexLayout spacing='loose'>
					<FlexChild desktopWidth='50'>
						<TextField
							// innerPreIcon={<FiDollarSign />}
							innerSufIcon='cm'
							name="Width"
							onChange={(e) => setChangeValue1(e)}
							placeHolder="Enter here"
							type="number"
							value={changeValue1}
						/>
					</FlexChild>
					<FlexChild desktopWidth='50'>
						<TextField
							// innerPreIcon={<FiDollarSign />}
							innerSufIcon='cm'
							name="Height"
							onChange={(e) => setChangeValue2(e)}
							placeHolder="Enter here"
							type="number"
							value={changeValue2}
						/>
					</FlexChild>
				</FlexLayout>
				<TextField
					// innerPreIcon={<FiDollarSign />}
					innerSufIcon='kg'
					name="Weight"
					onChange={(e) => setChangeValue3(e)}
					placeHolder="Enter here"
					type="number"
					value={changeValue3}
				/>
				<TextField
					innerPreIcon={<FiDollarSign />}
					name="Shipping fees"
					onChange={(e) => setChangeValue4(e)}
					placeHolder="Enter here"
					type="number"
					value={changeValue4}
				/>
			</FlexLayout>
		</Card>
	)
}

export default Tab3
