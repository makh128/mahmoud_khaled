export interface ProjectFeature {
  title: string;
  details: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  features: ProjectFeature[];
}

export const ProjectsData: Project[] = [
  {
    name: "Lintari",
    description:
      "AI-powered brand monitoring platform providing real-time sentiment analysis and competitor tracking.",
    url: "https://www.lintari.ai",
    features: [
      {
        title: "Real-time Dashboards",
        details: [
          "Developed sentiment analysis and tracking using Recharts and TanStack Query.",
        ],
      },
      {
        title: "Type-safe Forms",
        details: [
          "Built validation layers using React Hook Form and Zod for complex user inputs.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "React, TypeScript, TanStack Query, Tailwind CSS, Recharts, Zod.",
        ],
      },
    ],
  },
  {
    name: "ExpertEx",
    description:
      "Public-facing AI platform for content generation including Text, Image, and Video suites.",
    url: "https://www.app.expertex.ai",
    features: [
      {
        title: "Feature Modules",
        details: [
          "Implemented 19+ modules including TextSuite, ImageSuite, and VideoSuite.",
        ],
      },
      {
        title: "Real-time Updates",
        details: [
          "Integrated SignalR for real-time generation status and communication.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "React 19, Vite, SignalR, Azure Storage, TanStack Query, MUI.",
        ],
      },
    ],
  },
  {
    name: "ExpertEx Admin Dashboard",
    description:
      "Internal administrative portal for platform management and content moderation.",
    url: "",
    features: [
      {
        title: "Data Visualization",
        details: [
          "Designed interactive usage tracking charts and moderation tools.",
        ],
      },
      {
        title: "Infrastructure",
        details: [
          "Configured multi-stage Docker builds and Nginx routing for production.",
        ],
      },
      {
        title: "Tech Stack",
        details: ["React, Docker, Nginx, ApexCharts, MUI X Charts."],
      },
    ],
  },
];
