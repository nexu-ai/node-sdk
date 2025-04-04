#!/usr/bin/env node

import { NexuCore } from '@nexu-ai/core';
import { Command } from 'commander';
import { config } from './config';
import { status } from './status';

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
  .version('0.0.4');

// Deploy command
program
  .command('deploy')
  .description('Deploy an AI agent')
  .option('-t, --template <template>', 'Template to use (chatbot-rag, customer-service, document-processor, sales-marketing, data-analytics)')
  .option('-n, --name <name>', 'Name of the deployment')
  .option('-r, --region <region>', 'AWS region')
  .option('-p, --profile <profile>', 'AWS profile')
  .action(async (options: DeployOptions) => {
    const core = new NexuCore();
    console.log('🚀 Starting deployment...');
    try {
      await core.deploy({
        template: options.template,
        name: options.name,
        config: {
          region: options.region || 'us-east-1',
          profile: options.profile
        }
      });
      console.log('✅ Deployment completed successfully!');
      console.log('📊 Check your deployment status with: nexu status --name', options.name);
    } catch (error) {
      console.error('❌ Deployment failed:', error);
      process.exit(1);
    }
  });

// Status command
program
  .command('status')
  .description('Check deployment status')
  .option('-n, --name <name>', 'Name of the deployment')
  .action(async (options: { name: string }) => {
    try {
      await status(options.name);
    } catch (error) {
      console.error('❌ Failed to get status:', error);
      process.exit(1);
    }
  });

// Config command
program
  .command('config')
  .description('Configure AWS credentials')
  .option('-p, --profile <profile>', 'AWS profile name')
  .option('-r, --region <region>', 'AWS region')
  .action(async (options: { profile?: string; region?: string }) => {
    try {
      await config(options);
      console.log('✅ Configuration updated successfully!');
    } catch (error) {
      console.error('❌ Failed to update configuration:', error);
      process.exit(1);
    }
  });

program.parse(); 