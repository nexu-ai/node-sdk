export interface Config {
    region?: string;
    profile?: string;
}
export interface DeploymentOptions {
    template: string;
    name: string;
    config?: Config;
}
export interface DeploymentStatus {
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    url?: string;
    error?: string;
}
//# sourceMappingURL=index.d.ts.map