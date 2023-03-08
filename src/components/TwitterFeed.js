import React, { useEffect } from "react";
import { Timeline } from "react-twitter-widgets";

function TwitterFeed() {
	return (
		<div>
			<Timeline
				dataSource={{
					sourceType: "profile",
					screenName: "CaltransDist7",
				}}
				options={{
					chrome: "noheader, nofooter",
					dnt: true,
					height: "300",
				}}
			/>
		</div>
	);
}

export default TwitterFeed;
