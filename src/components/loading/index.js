import './style.js';
import LoadingStyle from './style.js';

export default function Loading(props) {
    return <LoadingStyle 
        duration={props.duration} 
        spinningColor={props.spinningColor} />
}