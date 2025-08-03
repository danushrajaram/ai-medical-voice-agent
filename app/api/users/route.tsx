
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db"; // ✅ Add this line

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    // check if user already exists
    const users = await db.select().from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
    // if not then create new user bro
    if (users.length === 0) {
        const result =await db.insert(usersTable).values({
            //@ts-ignore
            name:user?.fullName,
            email:user?.primaryEmailAddress?.emailAddress,
            credits:20
            //@ts-ignore
        }).returning({usersTable})
     return NextResponse.json(result[0]?.usersTable);
      // your create logic here
    }

    return NextResponse.json(users[0]);

  } catch (e) {
    return NextResponse.json(e);
  }
}
