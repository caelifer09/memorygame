import { NextResponse } from 'next/server';
const os = require('os')

export async function GET() {
    return NextResponse.json({device_name: os.hostname()});
}

