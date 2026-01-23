import type { LucideIcon } from "lucide-react";
import { Building2, FileCheck2, Scale, Shield, Target, Workflow } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  overview: string;
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "business-consulting",
    title: "Business Consulting",
    tagline: "Practical guidance for operations, growth, and decision-making.",
    icon: Building2,
    overview:
      "Structured consulting support to help leadership teams align priorities, clarify execution, and build measurable operating routines.",
    highlights: ["Discovery & assessment", "Actionable roadmap", "Execution support"],
  },
  {
    slug: "compliance-management",
    title: "Compliance Management",
    tagline: "Reduce risk with a clear, auditable compliance framework.",
    icon: Shield,
    overview:
      "Compliance reviews and implementation support to help you meet internal standards and regulatory expectations with confidence.",
    highlights: ["Compliance review", "Gap analysis", "Controls & reporting"],
  },
  {
    slug: "documentation-governance",
    title: "Documentation & Governance",
    tagline: "Policies, SOPs, and governance documentation that scales.",
    icon: FileCheck2,
    overview:
      "Create clear documentation that supports consistent execution—policies, SOPs, registers, and board-ready governance material.",
    highlights: ["Policy drafting", "SOP design", "Governance packs"],
  },
  {
    slug: "risk-assessment",
    title: "Risk Assessment",
    tagline: "Identify risk early and prioritize the right mitigations.",
    icon: Target,
    overview:
      "A focused risk assessment to map operational and compliance risks, then define a practical mitigation plan with ownership.",
    highlights: ["Risk register", "Mitigation plan", "Owner assignment"],
  },
  {
    slug: "audit-readiness",
    title: "Audit Readiness",
    tagline: "Get audit-ready with organized evidence and controls.",
    icon: Scale,
    overview:
      "Prepare your documentation and processes for audits by building evidence trails, control checklists, and review cadence.",
    highlights: ["Evidence checklist", "Control mapping", "Pre-audit review"],
  },
  {
    slug: "process-optimization",
    title: "Process Optimization",
    tagline: "Reduce friction with clearer workflows and accountability.",
    icon: Workflow,
    overview:
      "Process mapping and optimization to reduce waste, improve turnaround times, and create repeatable workflows.",
    highlights: ["Current-state mapping", "Workflow redesign", "KPIs & cadence"],
  },
];

export const getServiceBySlug = (slug: string | undefined) => SERVICES.find((s) => s.slug === slug);
