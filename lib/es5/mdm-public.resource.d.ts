import { MdmResource } from './mdm-resource';
export declare class MdmPublicResource extends MdmResource {
    get(name: any): any;
    dataFlowExporterPlugins(): any;
    dataFlowImportPlugins(): any;
    dataModelExporterPlugins(multiple?: boolean): any;
    dataModelImporterPlugins(multiple: any): any;
}
