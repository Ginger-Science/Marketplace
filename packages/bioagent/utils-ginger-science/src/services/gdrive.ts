import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

export async function getDriveClient() {
  const json = process.env.GDRIVE_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error("Missing GDRIVE_SERVICE_ACCOUNT_JSON in env");

  const creds = JSON.parse(json);

  const auth = new google.auth.JWT(
    creds.client_email,
    undefined,
    creds.private_key,
    SCOPES
  );

  await auth.authorize();

  return google.drive({ version: "v3", auth });
}

export async function fetchNewJsonFiles(folderId: string): Promise<any[]> {
  const drive = await getDriveClient();

  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType = 'application/json' and trashed = false`,
    fields: "files(id, name)",
  });

  const files = res.data.files ?? [];
  const results = [];

  for (const file of files) {
    const jsonRes = await drive.files.get(
      { fileId: file.id!, alt: "media" },
      { responseType: "json" }
    );
    results.push(jsonRes.data);
  }

  return results;
}
