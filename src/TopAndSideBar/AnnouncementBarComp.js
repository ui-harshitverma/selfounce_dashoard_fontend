import { AnnouncementBar } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react'

const AnnouncementBarComp = () => {
	const [close, setClose] = useState(true);
	
	return (
		<AnnouncementBar
		  children={"Offer Starting Sooon !!!"}
		  align="center"
		  type="info"
		  onClose={()=> setClose(false)}
		  active={close ? true : false}
		></AnnouncementBar>
	)
}

export default AnnouncementBarComp;
