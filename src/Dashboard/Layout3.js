import { BodyLayout, Button, Card, PageFooter, PageHeader, TextStyles, Wysiwyg } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";

const Layout3 = () => {
	const [editorState, onEditorStateChange] = useState();
	return (
		<>
			<BodyLayout>
				<PageHeader title="Text" sticky action={<Button onClick={() => window.history.back(-1)}>Go Back</Button>}></PageHeader>
				<Card>
					<Wysiwyg editorState={editorState} onEditorStateChange={(e)=> onEditorStateChange(e)}/>
				</Card>
				<PageFooter>
					<TextStyles>Cedcommerce @ 2020</TextStyles>
				</PageFooter>
			</BodyLayout>
		</>
	)
}

export default Layout3;