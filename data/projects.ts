export interface ProjectBase {
  slug: string
  stack: string[]
  company?: string
}

export const projects: ProjectBase[] = [
  {
    slug: 'gitops-argocd',
    stack: ['Kubernetes', 'Argo CD', 'Helm', 'Kustomize'],
    company: 'Diehl Aviation',
  },
  {
    slug: 'vault-external-secrets',
    stack: ['HashiCorp Vault', 'External Secrets Operator', 'Kubernetes'],
    company: 'Diehl Aviation',
  },
  {
    slug: 'vault-auto-unseal',
    stack: ['HashiCorp Vault', 'Transit Secret Engine', 'Kubernetes / VMs'],
    company: 'Diehl Aviation',
  },
  {
    slug: 'netbox-kubernetes',
    stack: ['Kubernetes', 'Helm', 'PostgreSQL', 'Redis', 'External Secrets'],
    company: 'Diehl Aviation',
  },
  {
    slug: 'dockerized-todo-app',
    stack: ['React', 'Node.js', 'MySQL', 'Docker', 'GitLab CI/CD', 'Trivy'],
    company: 'Homelab',
  },
  {
    slug: 'k8s-load-scaling',
    stack: ['Kubernetes', 'HPA', 'k6', 'Prometheus', 'Docker'],
    company: 'Homelab',
  },
  {
    slug: 'python-reporting-automation',
    stack: ['Python', 'pandas', 'openpyxl', 'Excel / CSV'],
    company: 'Diehl Aviation',
  },
  {
    slug: 'python-mysql-pipeline',
    stack: ['Python', 'MySQL', 'SQLAlchemy', 'pandas'],
    company: 'Homelab',
  },
]
