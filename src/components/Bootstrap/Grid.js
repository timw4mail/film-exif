import BSCol from 'inferno-bootstrap/dist/Col';
import BSContainer from 'inferno-bootstrap/dist/Container';
import BSRow from 'inferno-bootstrap/dist/Row';

import { BSWrapper } from './Bootstrap';

export const Col = BSWrapper(BSCol, 'bs-col');
export const Container = BSWrapper(BSContainer, 'bs-container');
export const Row = BSWrapper(BSRow, 'bs-row');
