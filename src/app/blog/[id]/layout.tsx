import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

const POSTS: Record<string, { title: string; desc: string }> = {
  "scaling-redis": {
    title: "Scaling Redis for 10M Concurrent WebSockets",
    desc: "Connection pooling, memory optimization, and pub/sub sharding inside high-load Next.js environments.",
  },
  "event-driven-ledger": {
    title: "Event-Driven Ledger Reconciliation with Go & Kafka",
    desc: "Zero-downtime ledger migration pipeline validating transaction state in sub-millisecond ranges.",
  },
  "soc2-compliance": {
    title: "SOC2 Compliance: Setting Up VPCs with OpenTofu",
    desc: "Step-by-step automation guides for provisioning isolated subnets, WAF layers, and cryptographic vault meshes.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = POSTS[id];

  if (!post) {
    return {
      title: "Blog Post | AM Tech Hub",
      alternates: { canonical: `/blog/${id}` },
    };
  }

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title: `${post.title} | AM Tech Hub`,
      description: post.desc,
      url: `https://amtechhub.online/blog/${id}`,
    },
  };
}

export default function BlogPostLayout({ children }: Props) {
  return children;
}
