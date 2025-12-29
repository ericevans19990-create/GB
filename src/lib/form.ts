export async function submitToApi(formId: string, data: Record<string, any>) {
  // Allow overriding the endpoint in production with an env var
  // When building with Vite, use VITE_FORM_ENDPOINT (e.g. https://api.example.com/api/form)
  const endpoint = (import.meta.env?.VITE_FORM_ENDPOINT as string) || '/api/form';

  // Encoding strategy: json (default) sends application/json
  // or 'form' to send application/x-www-form-urlencoded
  const encode = (import.meta.env?.VITE_FORM_ENCODE as string) || 'json';

  let response: Response;
  if (encode === 'form') {
    const params = new URLSearchParams();
    params.append('formId', formId);
    // flatten data keys into top-level fields
    Object.entries(data || {}).forEach(([k, v]) => {
      params.append(k, String(v ?? ''));
    });

    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
  } else {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formId, data }),
    });
  }

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Form submission failed: ${response.status} ${text}`);
  }

  return response.json();
}

// Note: by default in dev this posts to the local stub `/api/form`.
// For production builds on static hosting (Hostinger shared), set
// VITE_FORM_ENDPOINT to your chosen form receiver (Formspree, Getform,
// Supabase function, or your own API) before building.
