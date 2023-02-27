import { Accordion, Card, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react'


const AccordionHelp = () => {
	const [clicked, setClicked] = useState(-1);
	const handleToggle = (index) => {
		if (clicked === index) {
			setClicked(-1);
		} else {
			setClicked(index);
		}
	};
	const accordionArr = [
		{
			title: "What is Lorem Ipsum?",
			answer:
				"1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
		},
		{
			title: "Why do we use it?",
			answer:
				"2 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
		},
		{
			title: "Where does it come from?",
			answer:
				"3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
		},
		{
			title: "Where can I get some?",
			answer:
				"3 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
		},
	];
	return (
		<Card title="Accordion Example">
			{accordionArr.map((items, index) => {
				return (
					<Accordion
						key={index}
						active={clicked === index}
						// {...args}
						title={items.title}
						onClick={() => handleToggle(index)}
					>
						<TextStyles textcolor="light">{items.answer}</TextStyles>
					</Accordion>
				);
			})}
		</Card>
	)
}

export default AccordionHelp
