import type { AppPlugin, AppContext } from 'tsdiapi-server';
export * from './types';
export * from './hooks';
import client from './client';
export { client };
export type PluginOptions = {
    prismaOptions: any;
    globHooksPath: string;
};
declare class App implements AppPlugin {
    name: string;
    config: PluginOptions;
    context: AppContext;
    bootstrapFilesGlobPath: string;
    constructor(config?: PluginOptions);
    onInit(ctx: AppContext): Promise<void>;
}
export default function (config?: PluginOptions): App;
//# sourceMappingURL=index.d.ts.map