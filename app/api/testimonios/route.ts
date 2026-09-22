import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'testimonios.json');

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error al leer testimonios:', error);
    return NextResponse.json({ error: 'Error al leer testimonios' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const newContent = await request.json();
    fs.writeFileSync(dataPath, JSON.stringify(newContent, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al actualizar testimonios:', error);
    return NextResponse.json({ error: 'Error al actualizar testimonios' }, { status: 500 });
  }
}
