import { getGithubContributions } from "@/lib/github_contrib"

export default async function page() {
  const res = await getGithubContributions('wldnjs990', new Date("2025-10-01T00:00:00Z"), new Date("2025-10-31T23:59:59Z"))
  return (
    <pre>{JSON.stringify(res, null, 2)}</pre>
  )
}
