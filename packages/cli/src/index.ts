#!/usr/bin/env node

import { NexuCore } from '@nexu/core';
import { Config } from '@nexu/shared';
import { Command } from 'commander';

const program = new Command();

program
  .name('nexu')
  .description('Nexu CLI - The Vercel for AI agents in LATAM')
  .version('0.0.1');

program
  .command('deploy')
  .description('Deploy an AI agent')
  .option('-t, --template <template>', 'Template to use')
  .option('-n, --name <name>', 'Name of the deployment')
  .option('-r, --region <region>', 'AWS region')
  .option('-p, --profile <profile>', 'AWS profile')
  .action(async (options) => {
    const core = new NexuCore();
    const config: Config = {
      region: options.region || 'us-east-1',
      profile: options.profile
    };
    
    await core.deploy({
      template: options.template,
      name: options.name,
      config
    });
  });

program.parse(); 