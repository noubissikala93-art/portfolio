import type { Dictionary } from '@/types/dictionary'

const de: Dictionary = {
  nav: {
    about: 'Über mich',
    projects: 'Projekte',
    skills: 'Kenntnisse',
    contact: 'Kontakt',
    blog: 'Blog',
  },
  hero: {
    stats: [
      { value: '5', label: 'Projekte' },
      { value: '2023', label: 'Seit' },
      { value: '10+', label: 'Tools' },
    ],
    heading: 'Hallo.',
    role: 'DevOps & Platform Enthusiast',
    tagline: 'Kubernetes · GitOps · Secrets Management · IaC/CaC',
    ctaProjects: 'Projekte ansehen',
    ctaContact: 'Kontakt',
  },
  about: {
    label: 'Über mich',
    paragraphs: [
      'Ich entwickle und betreibe moderne Plattformen mit Fokus auf Automatisierung, CI/CD und zuverlässige Deployments.',
      'Mein Ziel ist es, Systeme zu bauen, die reproduzierbar, sicher und wartbar sind und ohne manuellen Eingriff stabil laufen.',
      'Dabei arbeite ich mit Technologien aus dem Bereich Cloud, Kubernetes und Infrastructure as Code.'
    ],
  },
  projects: {
    label: 'Projekte',
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
    'python-reporting-automation': {
      title: 'Python Reporting Automation — Diehl Aviation',
      summary:
        'Automatisierung mehrerer Reporting-Workflows bei Diehl Aviation mit Python. Rohdaten aus SAP, Airbus- und Boeing-Systemen sowie Excel-Dateien werden eingelesen, transformiert und als strukturierte Excel-Berichte ausgegeben.',
      problem:
        'Manuelle Aufbereitung von Betriebsdaten aus heterogenen Quellen (SAP, Airbus, Boeing) war zeitaufwendig, fehleranfällig und nicht reproduzierbar. Jede Datenlieferung erforderte vollständige manuelle Neubearbeitung.',
      solution:
        'Python-Skripte mit pandas für Datentransformation, Filterlogik und Quellenintegration entwickelt. openpyxl für strukturierte Excel-Ausgabe eingesetzt. Jeder Report als eigenständiges Modul — wiederverwendbare Hilfsfunktionen für gemeinsame Transformationsschritte.',
      outcome:
        'Fünf produktive Reporting-Workflows vollständig automatisiert: Boeing TAT, Flight Hours, BITE Converter, ASPI Report, Reliability Repair Shopfindings. Manuelle Bearbeitungszeit eliminiert, Berichte konsistent und reproduzierbar.',
      details: [
        'Boeing Reporting TAT: Turnaround-Zeit-Daten aus Excel aufbereitet und als strukturierter Bericht ausgegeben',
        'Flight Hours Preparation: Flugstundendaten aus mehreren Quellen zusammengeführt und normalisiert',
        'BITE Converter: DEPS Capacity Values aus interner Software extrahiert und in Excel-Format konvertiert',
        'Reliability Repair Shopfindings: drei Excel-Dateien + SAP-Daten zusammengeführt, gefiltert und ausgewertet',
        'Integration von Daten aus SAP, Airbus- und Boeing-Systemen in einheitliche Ausgabeformate',
        'Fehlerbehandlung für fehlende, inkonsistente oder leere Eingangsdaten aus verschiedenen Quellen',
      ],
    },
    'python-mysql-pipeline': {
      title: 'Python + MySQL Datenpipeline',
      summary:
        'Automatisierte Datenpipeline, die Metriken erfasst, in einer MySQL-Datenbank persistiert und strukturierte Berichte generiert. Historische Auswertungen und SQL-basierte Analysen jederzeit möglich.',
      problem:
        'Keine persistente Datenhaltung für laufend anfallende Metriken. Manuelle Abfragen ohne historischen Kontext, keine automatisierten Auswertungen und keine Nachvollziehbarkeit über Zeit.',
      solution:
        'Python-Skript erfasst Daten aus einer definierten Quelle und lädt sie über SQLAlchemy in eine MySQL-Datenbank. Automatische Report-Generierung aus den gespeicherten Daten mit pandas. SQL-Abfragen für flexible historische Auswertungen.',
      outcome:
        'Metriken vollständig persistent und historisch auswertbar. Automatische Berichte ohne manuelle Eingriffe. SQL-Abfragen ermöglichen flexible Ad-hoc-Analysen — direkt demonstrierbar.',
      details: [
        'Python-Skript mit SQLAlchemy ORM für datenbankagnostische Anbindung',
        'MySQL-Datenbankschema für strukturierte Metrikspeicherung',
        'Automatisierte Datenpipeline: Erfassung → Validierung → Speicherung → Report',
        'pandas für Aggregation und Auswertung gespeicherter Daten',
        'SQL-Abfragebeispiele: Tageswerte, Wochenaggregation, Anomalieerkennung',
        'Konfigurierbar über Umgebungsvariablen — keine Credentials im Code',
      ],
    },
  },
  skills: {
    label: 'Kenntnisse',
    groups: [
      {
        category: 'Plattform & Orchestrierung',
        items: ['Kubernetes', 'OpenShift', 'Helm', 'Kustomize'],
      },
      {
        category: 'GitOps & CI/CD',
        items: ['Argo CD', 'ApplicationSets', 'Deklarative Deployments', 'GitOps Workflows'],
      },
      {
        category: 'Secrets & Sicherheit',
        items: ['HashiCorp Vault', 'External Secrets Operator', 'Transit Engine', 'RBAC'],
      },
      {
        category: 'Infrastruktur & Tools',
        items: ['Linux', 'Bash', 'Docker', 'Terraform', 'Ansible'],
      },
      {
        category: 'Monitoring & Observability',
        items: ['Prometheus', 'Loki'],
      },
      {
        category: 'Debugging & Betrieb',
        items: ['kubectl', 'k9s', 'stern', 'Log-Analyse', 'Event-Tracing'],
      },
    ],
  },
  contact: {
    label: 'Kontakt',
    availability: 'Offen für DevOps- und Platform-Engineering-Stellen.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/[username]',
        display: 'gitlab.com',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/theodore-noubissi-kala-13b870275',
        display: 'linkedin.com/in/theodore-noubissi-kala',
      },
      {
        label: 'E-Mail',
        href: 'mailto:[noubissikala93@gmail.com]',
        display: 'noubissikala93@gmail.com',
      },
    ],
  },
  detail: {
    back: '← Zurück',
    problem: 'Problem',
    solution: 'Lösung',
    outcome: 'Ergebnis',
    implementation: 'Umsetzung',
  },
  blog: {
    label: 'Blog',
    heading: 'Application Management',
    description: 'Gedanken, Erfahrungen und Methoden aus dem Alltag als Application Manager.',
    back: '← Blog',
  },
  footer: 'Erstellt mit Next.js',
}

export default de
