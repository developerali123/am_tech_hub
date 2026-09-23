import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

const SERVICES: Record<string, { title: string; desc: string }> = {
  saas: {
    title: "SaaS Product Ecosystem",
    desc: "Modular enterprise HRMS & automated payroll suite designed for high-scale workforce operations and compliance.",
  },
  ai: {
    title: "AI Agentic Automations",
    desc: "Autonomous LLM agents and smart workflows for transaction auditing, automated compliance, and ledger reconciliation.",
  },
  fullstack: {
    title: "Custom Full-Stack Engineering",
    desc: "High-performance distributed microservices, low-latency API gateways, and robust database architectures.",
  },
  devops: {
    title: "Cloud & DevOps Architecture",
    desc: "Declarative infrastructure-as-code, zero-downtime CI/CD pipelines, and SOC2/GDPR audit-ready container fabrics.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES[id];

  if (!service) {
    return {
      title: "Services | AM Tech Hub",
      alternates: { canonical: `/services/${id}` },
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.desc,
    alternates: {
      canonical: `/services/${id}`,
    },
    openGraph: {
      title: `${service.title} | AM Tech Hub`,
      description: service.desc,
      url: `https://amtechhub.online/services/${id}`,
    },
  };
}

export default function ServiceDetailLayout({ children }: Props) {
  return children;
}
