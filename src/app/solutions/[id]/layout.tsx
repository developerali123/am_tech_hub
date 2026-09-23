import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

const SOLUTIONS: Record<string, { title: string; desc: string }> = {
  ai: {
    title: "AI-Powered Automation",
    desc: "Autonomous LLM agents auditing financial transactions, reconciling payroll records, and answering employee queries.",
  },
  concurrency: {
    title: "High-Concurrency Systems",
    desc: "Scale handling millions of active sessions with non-blocking APIs, distributed meshes, and sub-10ms response times.",
  },
  compliance: {
    title: "Compliance & Auditing",
    desc: "SOC2 Type II and GDPR infrastructure with isolated tenant schemas, cryptographic audit logs, and continuous scans.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const solution = SOLUTIONS[id];

  if (!solution) {
    return {
      title: "Solutions | AM Tech Hub",
      alternates: { canonical: `/solutions/${id}` },
    };
  }

  return {
    title: `${solution.title} | Solutions`,
    description: solution.desc,
    alternates: {
      canonical: `/solutions/${id}`,
    },
    openGraph: {
      title: `${solution.title} | AM Tech Hub`,
      description: solution.desc,
      url: `https://amtechhub.com/solutions/${id}`,
    },
  };
}

export default function SolutionDetailLayout({ children }: Props) {
  return children;
}
