import BSModal from 'inferno-bootstrap/dist/Modal/Modal';
import BSModalBody from 'inferno-bootstrap/dist/Modal/ModalBody';
import BSModalFooter from 'inferno-bootstrap/dist/Modal/ModalFooter';
import BSModalHeader from 'inferno-bootstrap/dist/Modal/ModalHeader';

import { BSWrapper } from './Bootstrap';

export const Modal = BSWrapper(BSModal, 'bs-modal');
export const ModalBody = BSWrapper(BSModalBody, 'bs-modal-body');
export const ModalFooter = BSWrapper(BSModalFooter, 'bs-modal-footer');
export const ModalHeader = BSWrapper(BSModalHeader, 'bs-modal-header');
