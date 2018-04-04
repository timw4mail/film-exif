import BSCard from 'inferno-bootstrap/dist/Card/Card';
import BSCardBody from 'inferno-bootstrap/dist/Card/CardBody';
import BSCardColumns from 'inferno-bootstrap/dist/Card/CardColumns';
import BSCardDeck from 'inferno-bootstrap/dist/Card/CardDeck';
import BSCardFooter from 'inferno-bootstrap/dist/Card/CardFooter';
import BSCardGroup from 'inferno-bootstrap/dist/Card/CardGroup';
import BSCardHeader from 'inferno-bootstrap/dist/Card/CardHeader';
import BSCardImgOverlay from 'inferno-bootstrap/dist/Card/CardImgOverlay';
import CardImg from 'inferno-bootstrap/dist/Card/CardImg';
import CardLink from 'inferno-bootstrap/dist/Card/CardLink';
import CardSubtitle from 'inferno-bootstrap/dist/Card/CardSubtitle';
import CardText from 'inferno-bootstrap/dist/Card/CardText';
import CardTitle from 'inferno-bootstrap/dist/Card/CardTitle';

import { BSWrapper } from 'components/Bootstrap';

export const Card = BSWrapper(BSCard, 'bs-card');
export const CardBody = BSWrapper(BSCardBody, 'bs-card-body');
export const CardColumns = BSWrapper(BSCardColumns, 'bs-card-columns');
export const CardDeck = BSWrapper(BSCardDeck, 'bs-card-deck');
export const CardFooter = BSWrapper(BSCardFooter, 'bs-card-footer');
export const CardGroup = BSWrapper(BSCardGroup, 'bs-card-group');
export const CardHeader = BSWrapper(BSCardHeader, 'bs-card-header');
export const CardImgOverlay = BSWrapper(BSCardImgOverlay, 'bs-card-img-overlay');

export {
	CardImg,
	CardLink,
	CardSubtitle,
	CardText,
	CardTitle,
};
