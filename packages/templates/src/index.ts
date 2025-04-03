export const TEMPLATES = {
  'chatbot-rag': {
    name: 'Chatbot RAG',
    description: 'A RAG-based chatbot for enterprise use',
    files: ['template.yaml']
  },
  'customer-service': {
    name: 'Customer Service',
    description: 'AI-powered customer service agent',
    files: ['template.yaml']
  }
} as const;

export type TemplateName = keyof typeof TEMPLATES; 