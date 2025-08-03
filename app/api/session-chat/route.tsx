import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { SessionChatTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { primaryKey } from "drizzle-orm/gel-core";
import { NextRequest, NextResponse } from "next/server";
import { Result } from "pg";
import {v4 as uuidv4} from 'uuid';

export async function POST(req:NextRequest) {
    const {notes, selectedDoctor}=await req.json();
    const user =await currentUser();

    try{
        const sessionId=uuidv4();   
        const result =await db.insert(SessionChatTable).values({
            sessionId: sessionId,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            notes:notes,
            selectedDoctor:selectedDoctor,
            createdOn:(new Date()). toString()
            //@ts-ignore
        }).returning({SessionChatTable})
        return NextResponse.json(result[0]?.SessionChatTable);
     }
    catch(e) {
        NextResponse.json(e)
    }
}

export async function GET(req:NextRequest){
    const {searchParams}=new URL (req.url);
    const sessionId=searchParams.get('sessionId');
    const user=await currentUser();
    const result =(await db.select().from(SessionChatTable)
    //@ts-ignore
    .where(eq(SessionChatTable).sessionId,sessionId));
    return NextResponse.json(result[0]);

}