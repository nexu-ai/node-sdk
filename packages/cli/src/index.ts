#!/usr/bin/env node

import { NexuCore } from '@nexu-ai/core';
import { Command } from 'commander';

interface DeployOptions {
  template: string;
  name: string;
  region?: string;
  profile?: string;
}

const program = new Command();

program
  .name('nexu')
  .description('CLI for Nexu.sh - The Developer Experience Platform for AI Agents and MCP in LATAM')
  .version('0.0.2');

program
  .command('deploy')
  .description('Deploy an AI agent')
  .option('-t, --template <template>', 'Template to use')
  .option('-n, --name <name>', 'Name of the deployment')
  .option('-r, --region <region>', 'AWS region')
  .option('-p, --profile <profile>', 'AWS profile')
  .action(async (options: DeployOptions) => {
    const core = new NexuCore();
    await core.deploy({
      template: options.template,
      name: options.name,
      config: {
        region: options.region || 'us-east-1',
        profile: options.profile
      }
    });
  });

program.parse(); 