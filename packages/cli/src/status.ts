import { NexuCore } from '@nexu-ai/core';
import type { DeploymentStatus } from '@nexu-ai/shared';

export async function status(name: string): Promise<DeploymentStatus> {
  const core = new NexuCore();
  const deployment = await core.getDeploymentStatus(name);

  console.log('\n📊 Deployment Status:');
  console.log('-------------------');
  console.log(`Name: ${deployment.name}`);
  console.log(`Status: ${deployment.status}`);
  console.log(`Created: ${deployment.createdAt}`);
  console.log(`Updated: ${deployment.updatedAt}`);
  
  if (deployment.url) {
    console.log(`URL: ${deployment.url}`);
  }
  
  if (deployment.error) {
    console.log('\n❌ Error:');
    console.log(deployment.error);
  }

  return deployment;
} 