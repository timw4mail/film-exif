/**
 * Overlay loader component
 *
 * @param {object} props
 * @param {boolean} props.hidden
 * @param {string} props.title
 */
export const Loader = (props) => {
	return (
		<section id="loading-shadow" hidden={props.hidden}>
			<loading-wrapper>
				<loading-content>
					<h3>{props.title}</h3>
					<br />
					<cssload-loader>
						<cssload-one className="cssload-inner" />
						<cssload-two className="cssload-inner" />
						<cssload-three className="cssload-inner" />
					</cssload-loader>
				</loading-content>
			</loading-wrapper>
		</section>
	);
};
