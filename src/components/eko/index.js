import { h, Component } from 'preact';
import style from './style';

export default class Eko extends Component {
	render() {
		return (
			<div class={style.eko}>
				<h1>eko</h1>
				<p>This is the eko component.</p>
			</div>
		);
	}
}
