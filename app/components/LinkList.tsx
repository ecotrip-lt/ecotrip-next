import React from 'react';

type LinkListProps = {
	title: string;
	list: { label: string; href: string }[];
	style: any;
};

const LinkList = ({ list, title, style }: LinkListProps) => {
	return (
		<div
			className='link-list-container'
			style={style}>
			<h2 className='link-list-title'>{title}</h2>
			<ul className='link-list-list'>
				{list
					? list.map((item, i) => (
							<li key={i}>
								<a href={item.href}>{item.label}</a>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default LinkList;
