export function formatPostText(data: {
  title: string;
  abstract: string;
  doi: string;
}): string {
  return `🧬 *${data.title}*\n\n${data.abstract}\n\n🔗 ${data.doi}`;
}
