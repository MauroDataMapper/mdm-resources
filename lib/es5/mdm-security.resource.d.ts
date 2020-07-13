import { MdmResource } from './mdm-resource';
export declare class MdmSecurityResource extends MdmResource {
    login(data: any, options?: any): any;
    logout(data?: any, options?: any): any;
    permissions(securableResourceDomainType: any, securableResourceId: any, options?: {}): any;
}
