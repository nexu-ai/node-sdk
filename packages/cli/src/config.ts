import fs from 'fs';
import os from 'os';
import path from 'path';

interface ConfigOptions {
  profile?: string;
  region?: string;
}

export async function config(options: ConfigOptions) {
  const configDir = path.join(os.homedir(), '.nexu');
  const configFile = path.join(configDir, 'config.json');

  // Create config directory if it doesn't exist
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  // Read existing config or create new one
  let currentConfig = {};
  if (fs.existsSync(configFile)) {
    currentConfig = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  }

  // Update config with new values
  const newConfig = {
    ...currentConfig,
    ...(options.profile && { profile: options.profile }),
    ...(options.region && { region: options.region })
  };

  // Write updated config
  fs.writeFileSync(configFile, JSON.stringify(newConfig, null, 2));

  return newConfig;
} 