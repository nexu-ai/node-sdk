export interface Config {
  region: string;
  profile?: string;
}

export interface DeploymentOptions {
  template: string;
  name: string;
  config: Config;
} 