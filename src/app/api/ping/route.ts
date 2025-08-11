import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("learning_goals")
    .select("id")
    .limit(1);

  return NextResponse.json({
    ok: !error,
    rows: data?.length ?? 0,
    error: error?.message,
  });
} 