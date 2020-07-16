import { MdmResource } from './mdm-resource';
/**
 * Controller: importer
 |   GET    | /api/importer/parameters/${ns}?/${name}?/${version}?                                                  | Action: parameters
 */
export declare class MdmImporterResource extends MdmResource {
    get(namespace?: any, name?: any, version?: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
