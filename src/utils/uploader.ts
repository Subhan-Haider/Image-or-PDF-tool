/**
 * Obfuscated API key retrieval using character shifting (no emojis used).
 */
export function getDecryptedKey(): string {
  const OBSTRUCTED_KEY = "vk53595358533<vk";
  try {
    return OBSTRUCTED_KEY.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 3)).join('');
  } catch (error) {
    console.error("Failed to decode authorization key:", error);
    return "sh202620252009sh";
  }
}

/**
 * Uploads a file (image or PDF) to the central storage server in the background.
 * Gracefully degrades to local-only if the server is offline or errors.
 */
export async function uploadFileToServer(file: File): Promise<string | null> {
  const apiKey = getDecryptedKey();
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("https://storage.lootops.me/upload", {
      method: "POST",
      headers: {
        Authorization: apiKey
      },
      body: formData
    });

    if (!res.ok) {
      throw new Error(`Server returned status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Successfully uploaded to server, url:", data.url);
    return data.url;
  } catch (error) {
    console.warn("Server upload failed or is offline. Silent fallback to local processing.", error);
    return null;
  }
}
