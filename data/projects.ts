export interface ProjectBase {
  slug: string
  stack: string[]
}

export const projects: ProjectBase[] = [
  {
    slug: 'gitops-argocd',
    stack: ['Kubernetes', 'Argo CD', 'Helm', 'Kustomize'],
  },
  {
    slug: 'vault-external-secrets',
    stack: ['HashiCorp Vault', 'External Secrets Operator', 'Kubernetes'],
  },
  {
    slug: 'vault-auto-unseal',
    stack: ['HashiCorp Vault', 'Transit Secret Engine', 'Kubernetes / VMs'],
  },
  {
    slug: 'netbox-kubernetes',
    stack: ['Kubernetes', 'Helm', 'PostgreSQL', 'Redis', 'External Secrets'],
  },
  {
    slug: 'dockerized-todo-app',
    stack: ['React', 'Node.js', 'MySQL', 'Docker', 'GitLab CI/CD', 'Trivy'],
  },
  {
    slug: 'k8s-load-scaling',
    stack: ['Kubernetes', 'HPA', 'k6', 'Prometheus', 'Docker'],
  },
  {
    slug: 'python-reporting-automation',
    stack: ['Python', 'pandas', 'openpyxl', 'Excel / CSV'],
  },
  {
    slug: 'python-mysql-pipeline',
    stack: ['Python', 'MySQL', 'SQLAlchemy', 'pandas'],
  },
]
