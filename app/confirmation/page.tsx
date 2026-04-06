import { redirect } from 'next/navigation'

// Ancienne page — redirige vers /merci
export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}) {
  const params = await searchParams
  const qs = new URLSearchParams(params).toString()
  redirect(qs ? `/merci?${qs}` : '/merci')
}
