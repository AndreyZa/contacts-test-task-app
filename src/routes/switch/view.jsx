import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { LayoutBase } from 'layouts';
import { routes } from '../tree';
import { fetchUsersStarted, openChoicedView } from 'store/app/actions';

const View = React.memo(() => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsersStarted());
		dispatch(openChoicedView());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Switch>
			{Object.keys(routes).map((key) => {
				const { page: Page, ...route } = routes[key];

				return (
					<Route
						key={route.path}
						{...route}
						render={(matchProps) => (
							<LayoutBase>
								<Page {...matchProps} />
							</LayoutBase>
						)}
					/>
				)
			})}
		</Switch>
	);
});

export { View };
