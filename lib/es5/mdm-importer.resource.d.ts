import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: importer
 |   GET    | /api/importer/parameters/${ns}?/${name}?/${version}?                                                  | Action: parameters
 */
export declare class MdmImporterResource extends MdmResource {
    get(namespace?: any, name?: any, version?: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
