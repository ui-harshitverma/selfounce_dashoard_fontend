import { Card, FlexLayout, TextStyles, Uploadnew } from '@cedcommerce/ounce-ui'
import React from 'react'

const Tab2 = () => {
	return (
		<>
			<Card title='Variants'>
				<FlexLayout direction='vertical' spacing='loose'>
					<TextStyles>Add a custome variat options for your product, like different sizes or colors.</TextStyles>
					<Uploadnew
						className="avatar-uploader1"
						listType="picture-card"
						name="Avtar"
						uploadbutton
					/>
				</FlexLayout>
			</Card>
		</>
	)
}

export default Tab2
