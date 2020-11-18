import React from 'react';

const Button = (props): JSX.Element => {
	return (
		<>
			<button type="button" onClick={() => props.handleClick(props.year, props.period)}>{`${props.year} ${props.season}`}</button>
			<br></br>
		</>
	);
};

export default Button;
