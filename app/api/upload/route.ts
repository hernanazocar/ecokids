import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'uploads';

    if (!file) {
      return NextResponse.json({ error: 'No se envió ningún archivo' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Crear nombre de archivo único
    const timestamp = Date.now();
    const extension = path.extname(file.name);
    const baseName = path.basename(file.name, extension);
    const fileName = `${baseName}-${timestamp}${extension}`;

    // Guardar en public/{folder}/
    const publicPath = path.join(process.cwd(), 'public', folder);
    const filePath = path.join(publicPath, fileName);

    await writeFile(filePath, buffer);

    // Retornar la URL pública
    const publicUrl = `/${folder}/${fileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: fileName
    });
  } catch (error) {
    console.error('Error al subir archivo:', error);
    return NextResponse.json({ error: 'Error al subir archivo' }, { status: 500 });
  }
}
