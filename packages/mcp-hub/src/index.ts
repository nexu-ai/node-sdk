export interface MCPServer {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  endpoint: string;
}

export class MCPHub {
  async discoverServers(): Promise<MCPServer[]> {
    // TODO: Implement server discovery
    return [];
  }

  async connectToServer(_serverId: string): Promise<MCPServer> {
    // TODO: Implement server connection
    throw new Error('Not implemented');
  }
} 