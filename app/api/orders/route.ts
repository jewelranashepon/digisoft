import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ordersFilePath = path.join(process.cwd(), 'data', 'orders.json');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Read existing orders
    const fileData = fs.readFileSync(ordersFilePath, 'utf-8');
    const orders = JSON.parse(fileData);

    // Create new order object
    const newOrder = {
      id: `order_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...body,
    };

    // Save
    orders.push(newOrder);
    fs.writeFileSync(
      ordersFilePath,
      JSON.stringify(orders, null, 2)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to save order' },
      { status: 500 }
    );
  }
}
