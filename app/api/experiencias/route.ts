import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'experiencias.json');

// GET - Obtener experiencias
export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error al leer experiencias:', error);
    return NextResponse.json({ error: 'Error al leer experiencias' }, { status: 500 });
  }
}

// PUT - Actualizar experiencias
export async function PUT(request: Request) {
  try {
    const newContent = await request.json();
    fs.writeFileSync(dataPath, JSON.stringify(newContent, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al actualizar experiencias:', error);
    return NextResponse.json({ error: 'Error al actualizar experiencias' }, { status: 500 });
  }
}
