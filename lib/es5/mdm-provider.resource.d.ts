import { MdmResource } from './mdm-resource';
/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/admin/providers/exporters                                                                        | Action: exporterProviders
 |   GET    | /api/admin/providers/emailers                                                                         | Action: emailProviders
 |   GET    | /api/admin/providers/dataLoaders                                                                      | Action: dataLoaderProviders
 |   GET    | /api/admin/providers/importers                                                                        | Action: importerProviders
 */
export declare class MdmProviderResource extends MdmResource {
    exporters(queryStringParams?: any, restHandlerOptions?: any): any;
    emailers(queryStringParams?: any, restHandlerOptions?: any): any;
    dataLoaders(queryStringParams?: any, restHandlerOptions?: any): any;
    importers(queryStringParams?: any, restHandlerOptions?: any): any;
}
