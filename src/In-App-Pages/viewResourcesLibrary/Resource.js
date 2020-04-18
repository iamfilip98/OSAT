import React from 'react'
//this component contains the layout of each reasource (accordion button)
function Resource ({resource: resource, index, toggleResource: toggleResource, deleteResource: deleteResource}) {
	return (
		<div
			className={"resource " + (resource.open ? 'open' : '')}
			id={index}
			//this function toggles the 'open' state when a resource is clicked on
			onClick={() => {toggleResource(index);}}
		>
			<div className="resource-title">
				{resource.title}
			</div>
			<div className="resource-answer">
				{resource.content}
			</div>
		</div>
	)
}

export default Resource
