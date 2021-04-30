import { Historical, SecurableModel } from './mdm-model-types.model';
import { MdmIndexResponse, MdmResponse } from './mdm-common.model';
import { Container } from './mdm-container-types.model';
export interface Classifier extends Container {
}
export declare type ClassifierDetail = Classifier & SecurableModel & Historical;
export declare type ClassifierIndexResponse = MdmIndexResponse<Classifier>;
export declare type ClassifierDetailResponse = MdmResponse<ClassifierDetail>;
