import { models } from "@/data/models";
import { notFound } from "next/navigation";
import ModelProfileClient from "./ModelProfileClient";

export default async function ModelProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);
  if (!model) notFound();

  return <ModelProfileClient model={model} />;
}