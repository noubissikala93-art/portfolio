import type { Dictionary } from '@/types/dictionary'

const en: Dictionary = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    blog: 'Blog',
  },
  hero: {
    stats: [
      { value: '5', label: 'Projects' },
      { value: '2023', label: 'Since' },
      { value: '10+', label: 'Tools' },
    ],
    heading: 'Hello.',
    role: 'DevOps & Platform Enthusiast',
    tagline: 'Kubernetes · GitOps · Secrets Management · IaC/CaC',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact',
  },
  about: {
    label: 'About',
    paragraphs: [
      'I build and operate Kubernetes-based platforms with a focus on GitOps workflows, secrets management, and reliable on-premises deployments.',
      'My work centers on HashiCorp Vault, Argo CD, and the External Secrets Operator — tools that make infrastructure auditable, reproducible, and secure by default.',
      'I prefer systems that are easy to understand, straightforward to debug, and don\'t require manual intervention to keep running.',
    ],
  },
  projects: {
    label: 'Projects',
    detailsLink: 'Details →',
  },
  projectsData: {
    'gitops-argocd': {
      title: 'GitOps-Plattform — Argo CD',
      summary:
        'Deklarative Deployment-Plattform auf Basis von Argo CD. Git ist die einzige Quelle der Wahrheit — kein manuelles kubectl.',
      problem:
        'Deployments waren manuell, inkonsistent und hinterließen kein Audit-Trail. Direkt mit kubectl durchgeführte Änderungen hatten keinen Rollback-Pfad.',
      solution:
        'Argo CD mit ApplicationSets, automatisierten Sync-Policies (self-heal, prune) und RBAC pro Team konfiguriert. Alle Kubernetes-Manifeste werden in Git verwaltet.',
      outcome:
        'Vollständige Reproduzierbarkeit der Deployments. Jede Änderung nachvollziehbar und auditierbar. Rollback in Sekunden via Git-Revert.',
      details: [
        'Argo CD über Helm deployed und konfiguriert',
        'ApplicationSets für Multi-Namespace- und Multi-Cluster-Ziele',
        'Sync-Policies: automated, self-heal, prune',
        'RBAC pro Team und Projekt konfiguriert',
        'Out-of-Band-Änderungen werden automatisch von Argo CD korrigiert',
      ],
    },
    'vault-external-secrets': {
      title: 'Vault + External Secrets Operator',
      summary:
        'Secrets werden automatisch aus Vault in Kubernetes bereitgestellt. Kein Klartext-Secret in Git.',
      problem:
        'Secrets waren in Helm-Values und ConfigMaps hardcodiert. Kein Rotationsmechanismus, kein Audit-Trail, keine Zugriffskontrolle.',
      solution:
        'Vault mit KV v2 deployed, Kubernetes-Auth-Methode konfiguriert, External Secrets Operator installiert sowie SecretStore- und ExternalSecret-CRDs pro Namespace definiert.',
      outcome:
        'Keine Klartext-Secrets in Git oder ConfigMaps. Automatische Synchronisation. Zugriff über Vault-Policies kontrolliert.',
      details: [
        'HashiCorp Vault mit KV v2 Secrets Engine deployed',
        'Kubernetes-Auth-Methode für Pod-basierte Identität',
        'Vault-Policies pro Anwendung definiert',
        'SecretStore + ExternalSecret CRDs pro Namespace',
        'Secrets werden als native Kubernetes Secrets materialisiert',
      ],
    },
    'vault-auto-unseal': {
      title: 'Vault Auto-Unseal — On-Prem',
      summary:
        'Vault öffnet sich automatisch nach Pod- oder Node-Neustart. Keine Cloud-KMS-Abhängigkeit.',
      problem:
        'Nach jedem Vault-Pod-Neustart war ein manuelles Unseal erforderlich. Für produktive On-Premises-Umgebungen nicht praktikabel.',
      solution:
        'Einen dedizierten Vault A mit Transit Secret Engine als Unseal-Provider deployed. Vault B mit einer Seal-Stanza konfiguriert, die über Transit auf Vault A zeigt.',
      outcome:
        'Vault B startet und öffnet sich automatisch. Kein manueller Eingriff erforderlich. Vollständig On-Prem.',
      details: [
        'Vault A: Transit Secret Engine aktiviert, dient als Unseal-Provider',
        'Vault B: seal "transit" Stanza in vault.hcl konfiguriert',
        'Vault A einmalig mit Shamir-Keys initialisiert — offline, sicher',
        'Getestet: Pod-Neustart, Node-Drain, vollständiger Cluster-Neustart',
        'Keine Abhängigkeit von AWS KMS, GCP Cloud KMS oder Azure Key Vault',
      ],
    },
    'dockerized-todo-app': {
      title: 'Dockerized Todo App — CI/CD Pipeline',
      summary:
        'Mehrstufige App (React + Node.js + MySQL) vollständig containerisiert mit Docker. GitLab-CI/CD-Pipeline mit automatisiertem Build, Trivy-Vulnerability-Scanning und Registry-Push.',
      problem:
        'Kein standardisierter Prozess zum Bauen, Scannen und Deployen einer Multi-Service-Applikation. Manuelle Image-Builds ohne CVE-Prüfung und ohne Audit-Trail für gepushte Images.',
      solution:
        'Jeder Service wurde mit produktionsreifen Dockerfiles containerisiert (Multi-Stage-Build, Non-Root-User, gepinnte Tags). Eine 4-stufige GitLab-CI/CD-Pipeline wurde aufgebaut: Dependency-Audit → Docker-Build → Trivy-Scan → Push in die GitLab Container Registry.',
      outcome:
        'Jeder Push auf main löst automatisch die Pipeline aus. CRITICAL/HIGH-CVEs blockieren den Push. Images werden mit dem Commit-SHA getaggt — unveränderlich und nachvollziehbar. npm wurde aus dem finalen Backend-Image entfernt, um die node-tar-CVE-Angriffsfläche vollständig zu eliminieren.',
      details: [
        'Multi-Stage-Dockerfile für React: Node baut das Bundle, nginx liefert es aus — kein Build-Tooling im finalen Image',
        'Non-Root-User (appuser) im Node.js-Backend-Container',
        'npm nach npm ci gelöscht — entfernt gebündelte tar-CVEs aus dem Runtime-Image',
        'GitLab CI/CD: 4 Stages — checks, build, scan, push — Jobs innerhalb jeder Stage laufen parallel',
        'Trivy scannt Docker-Tar-Artefakte vor dem Push — exit-code 1 bei CRITICAL/HIGH blockiert die Pipeline',
        'Images mit Git-Commit-SHA getaggt (CI_COMMIT_SHORT_SHA) — keine latest-Tags',
        'GitLab Container Registry als Image-Store — keine externen Credentials erforderlich',
      ],
    },
    'netbox-kubernetes': {
      title: 'NetBox auf Kubernetes',
      summary:
        'Produktionsnahes NetBox-Deployment (IPAM/DCIM) mit persistentem Storage und Secrets aus Vault.',
      problem:
        'NetBox benötigte persistentes PostgreSQL, Redis, TLS-Ingress und sichere Secret-Verwaltung — ohne manuelle Konfiguration bei jedem Neustart.',
      solution:
        'Deployment über Helm-Chart mit PVCs für PostgreSQL und Media-Storage, Secrets aus Vault via ESO sowie Ingress mit TLS-Terminierung.',
      outcome:
        'Vollständig deklarativ und persistent. Datenbank und Media-Dateien überleben Pod-Neustarts. Secrets über Vault verwaltet.',
      details: [
        'Helm-Chart-Deployment mit angepasster values.yaml',
        'PersistentVolumeClaims für PostgreSQL-Daten und Media-Dateien',
        'Datenbank-Credentials und SECRET_KEY aus Vault via External Secrets Operator',
        'Ingress mit TLS-Terminierung',
        'Debugging und Behebung von: PVC-Binding-Fehlern, Init-Container-Abstürzen, DB-Migrationsfehlern',
      ],
    },
    'k8s-load-scaling': {
      title: 'K8s Horizontale Skalierung — Lasttest',
      summary:
        'Anwendung mit HPA und definierten Ressourcenlimits deployed, anschließend unter Last gesetzt. Skalierungsverhalten, Pod-Erstellungslatenz und Antwortzeiten unter Stress beobachtet.',
      problem:
        'Kein Einblick in das Anwendungsverhalten unter steigender Last. Kein Autoscaling konfiguriert, Ressourcenlimits undefiniert — Risiko von Ressourcenkonkurrenz und Clusterinstabilität.',
      solution:
        'Anwendung mit CPU/Memory Requests und Limits deployed. HPA mit 70 % CPU-Zielauslastung konfiguriert. Lasttests mit k6 durchgeführt (Ramp-up, Dauerlast, Spike), um Skalierungsauslöser und Antwortzeitdegradierung zu beobachten.',
      outcome:
        'HPA skalierte Pods automatisch unter Last. Skalierungsgrenzen und Engpässe identifiziert. Antwortzeitverhalten über verschiedene Replikatanzahlen dokumentiert. Reflexion über Cold-Start-Overhead und Scheduler-Latenz.',
      details: [
        'Deployment mit mehreren Replikaten und definierten CPU/Memory Requests und Limits',
        'Horizontal Pod Autoscaler mit CPU-Auslastungsziel (70 %) konfiguriert',
        'Lasttest-Szenarien mit k6: gradueller Ramp-up, Dauerlast, Spike',
        'Echtzeit-Beobachtung: kubectl top, Pod-Events, Replikatanzahl-Entwicklung',
        'Antwortzeitmetriken während Scale-up und Scale-down erfasst',
        'Identifizierte Grenzen: Scheduler-Latenz, Image-Pull-Zeit, Cold-Start-Overhead',
        'Eigene HPA-Live-Visualisierung mit React entwickelt: Pod-Zustände und CPU-Metriken in Echtzeit',
      ],
    },
  },
  skills: {
    label: 'Skills',
    groups: [
      {
        category: 'Platform & Orchestration',
        items: ['Kubernetes', 'OpenShift', 'Helm', 'Kustomize'],
      },
      {
        category: 'GitOps & CI/CD',
        items: ['Argo CD', 'ApplicationSets', 'Declarative Deployments', 'Git Workflows'],
      },
      {
        category: 'Secrets & Security',
        items: ['HashiCorp Vault', 'External Secrets Operator', 'Transit Engine', 'RBAC', 'KV v2'],
      },
      {
        category: 'Infrastructure & Tooling',
        items: ['Linux', 'Bash', 'Docker', 'Terraform'],
      },
      {
        category: 'Debugging & Operations',
        items: ['kubectl', 'k9s', 'stern', 'Log Analysis', 'Event Tracing'],
      },
    ],
  },
  contact: {
    label: 'Contact',
    availability: 'Available for DevOps and Platform Engineering roles.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/[username]',
        display: 'github.com/[username]',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/theodore-noubissi-kala-13b870275',
        display: 'linkedin.com/in/theodore-noubissi-kala',
      },
      {
        label: 'Email',
        href: 'mailto:[email]',
        display: '[email]',
      },
    ],
  },
  detail: {
    back: '← Back',
    problem: 'Problem',
    solution: 'Solution',
    outcome: 'Outcome',
    implementation: 'Implementation',
  },
  blog: {
    label: 'Blog',
    heading: 'Application Management',
    description: 'Thoughts, experience, and methods from everyday application management work.',
    back: '← Blog',
  },
  footer: 'Built with Next.js',
}

export default en
