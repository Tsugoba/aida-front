export async function fetcher<T>(
  path: string,
  fetcherOptions: Record<string, string | FormData> = {}
): Promise<T> {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...fetcherOptions,
    headers,
  });

  if (!response.ok) {
    await manageError(response);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

export async function fetcherAmazon(
  url: string,
  headers: Headers,
  fetcherOptions: Record<string, any> = {}
) {
  const response = await fetch(url, {
    ...fetcherOptions,
    headers,
  });
  if (!response.ok) {
    await manageError(response);
  }
  return response;
}

async function manageError(response: Response) {
  let jsonError;
  let message;
  try {
    jsonError = await response.json();
    message = jsonError.message || jsonError.error;
  } catch (error) {
    message = response.statusText;
  }
  throw new Error(message);
}
