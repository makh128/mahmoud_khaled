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
        title: "Monorepo & Marketing Site",
        details: [
          "Worked in a pnpm + Turborepo monorepo containing the product app, admin dashboard, maintenance page, and a Next.js (App Router) marketing site with pricing, blog, and status pages.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "React 19, Next.js, Vite, SignalR, Azure Storage, TanStack Query, Redux Toolkit, MUI, Turborepo.",
        ],
      },
    ],
  },
  {
    name: "Hakeem (حكيم) - Mobile App",
    description:
      "React Native (Expo) medical appointment booking app for Patient, Doctor, and Assistant roles, with full Arabic and English support.",
    url: "",
    features: [
      {
        title: "Cross-platform Mobile App",
        details: [
          "Built a single iOS and Android codebase with Expo and React Navigation (bottom tabs and native stacks).",
          "Implemented role-based experiences for patients, doctors, and assistants.",
        ],
      },
      {
        title: "Real-time & Notifications",
        details: [
          "Integrated SignalR for live appointment updates and Firebase Cloud Messaging for push notifications.",
        ],
      },
      {
        title: "Security & Localization",
        details: [
          "Stored tokens securely with Keychain / Secure Store and added Google sign-in via Expo Auth Session.",
          "Delivered Arabic (RTL) and English localization using i18next.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "React Native, Expo, TypeScript, React Navigation, TanStack Query, Zustand, React Hook Form, Zod, SignalR, Firebase, react-native-maps.",
        ],
      },
    ],
  },
  {
    name: "Campanya",
    description:
      "Media buying and social engagement platform that brings ad performance and customer conversations (Messenger, Instagram, WhatsApp) into one dashboard.",
    url: "",
    features: [
      {
        title: "Monorepo Architecture",
        details: [
          "Structured the product as a pnpm + Turborepo monorepo with three apps (Next.js marketing site, Vite product app, support dashboard) and shared packages for UI, auth, i18n, and the API client.",
        ],
      },
      {
        title: "Product Features",
        details: [
          "Built the dashboard, campaigns, and a unified Smart Inbox with ad attribution, split view, internal notes, snooze, and keyboard shortcuts.",
          "Implemented authentication with OTP verification, Google sign-in, in-memory access tokens, and HttpOnly refresh cookies.",
        ],
      },
      {
        title: "Design System & i18n",
        details: [
          "Created a reusable MUI-based component library with design tokens, light/dark themes, and full Arabic RTL support.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "Next.js, React 19, TypeScript (strict), Vite, MUI, TanStack Query, Zustand, React Hook Form, Zod, pnpm, Turborepo, Docker.",
        ],
      },
    ],
  },
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
        title: "Separate Marketing Site",
        details: [
          "Delivered the public landing page as a standalone static Vite + React project, decoupled from the authenticated dashboard.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "React, TypeScript, Vite, TanStack Query, Tailwind CSS, Radix UI, Recharts, Zod.",
        ],
      },
    ],
  },
  {
    name: "ExpertEx Cut - Browser Video Editor",
    description:
      "Browser-based, non-linear video editor where editing, preview, and export run entirely client-side. Built on the open-source OpenCut project.",
    url: "",
    features: [
      {
        title: "Client-side Media Pipeline",
        details: [
          "Multi-track timeline with real-time WebGPU preview and in-browser export, with no media uploaded to a server.",
        ],
      },
      {
        title: "AI Captions",
        details: [
          "Ran Whisper speech recognition in a Web Worker through Hugging Face Transformers.",
        ],
      },
      {
        title: "Tech Stack",
        details: [
          "Next.js, React 19, TypeScript, Tailwind CSS v4, Radix UI, Zustand, WebGPU / WASM.",
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
