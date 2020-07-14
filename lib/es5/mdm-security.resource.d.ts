import { MdmResource } from './mdm-resource';
export declare class MdmSecurityResource extends MdmResource {
    login(data: any): any;
    logout(queryStringParams?: any): any;
    permissions(securableResourceDomainType: any, securableResourceId: any, queryStringParams?: any): any;
}
