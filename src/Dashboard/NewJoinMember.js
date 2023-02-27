import { BodyLayout, Button, Card, FlexLayout, PageHeader, TextField, Uploadnew } from '@cedcommerce/ounce-ui'
// import { UserMenu } from '@shopify/polaris/build/ts/latest/src/components/TopBar/components'
import React from 'react'
// import { useState } from 'react'

function NewJoinMember() {

	// const onChange = (e) => {
	// 	setdata({
	// 		...data,
	// 		[name]: e
	// 	})
	// }

	// const NewJoinMemberData = () => {

	// }
	return (
		<BodyLayout>
			<PageHeader title="Dashboard" sticky action={<Button onClick={() => window.history.back()}>Go Back</Button>}></PageHeader>
			<FlexLayout spacing="loose" direction='vertical' valign='center'>
				<FlexLayout desktopWidth='100' mobileWidth='100' tabWidth='100' spacing='loose'>
					<Card extraClass="fileStyle">
						<FlexLayout halign="center">
							<FlexLayout
								direction="vertical"
								spacing="loose"
							>
								<TextField
									id={0}
									name="Name"
									// value={data.name}
									// onChange={onChange}
									placeHolder="Placeholder"
									type="text"
								/>
								<TextField
									id={1}
									name="Date"
									// value={data.date}
									// onChange={ ()=> gg}
									placeHolder="Placeholder"
									type="text"
								/>
								<FlexLayout
									desktopWidth="100"
									mobileWidth="100"
									tabWidth="100"
									halign='center'
								>
									<Uploadnew
										className="avatar-uploader"
										listType="picture-card"
										name="Avtar"
										uploadbutton
									/>
								</FlexLayout>
								<FlexLayout
									halign="end"
									spacing="mediumTight"
								>
									<Button
										onClick={() => window.history.go(-1)}
										thickness="extraThin"
										type="Secondary"
									>
										Cancel
									</Button>
									<Button
										// onClick={NewJoinMemberData}
										thickness="extraThin"
									>
										Save
									</Button>
								</FlexLayout>
							</FlexLayout>

						</FlexLayout>
					</Card>
				</FlexLayout>
			</FlexLayout>
		</BodyLayout >
	)
}

export default NewJoinMember