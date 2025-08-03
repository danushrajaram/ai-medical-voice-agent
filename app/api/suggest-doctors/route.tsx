
import { NextRequest, NextResponse } from "next/server";
import { AIDoctorAgents } from "@/shared/list";
import { openai } from "@/config/OpenAiModel";

export async function POST(req:NextRequest) {

    const {notes}=await req.json();

    try{
        const completion =await openai.chat.completions.create({
            model:"mistralai/mistral-small-3.2-24b-instruct-2506:free",
            // model: "gpt-3.5-turbo",
            messages:[
                {
                    role:'system', content:JSON.stringify(AIDoctorAgents)},
                {role:"user", content:"User Notes/Symptoms:"+notes+", Depends on user notes and symptoms, Please suggest list of doctors, Return Object in JSON Only"},
              
            ],
        });
        const rawResp = completion.choices[0].message;
        //@ts-ignore
        const Resp=rawResp.content.trim().replace('```json' ,'') . replace('```','')
        const JSONResp =JSON.parse(Resp);
        return NextResponse.json(JSONResp);
    }
    catch(e) {
        return NextResponse.json(e);
    }
}

// import { NextRequest, NextResponse } from "next/server";
// import { AIDoctorAgents } from "@/shared/list";
// import { openai } from "@/config/OpenAiModel";

// export async function POST(req: NextRequest) {
//   const { notes } = await req.json();

//   try {
//    const completion = await openai.chat.completions.create({
//   model: "google/gemini-2.5-flash-preview-05-20",
//   temperature: 0.7,
//   messages: [
//     {
//       role: "system",
//       content: JSON.stringify(AIDoctorAgents),
//     },
//     {
//       role: "user",
//       content: `User Notes/Symptoms: ${notes}.
// Suggest 2 or 3 relevant doctors. Return JSON array only with:
// "id", "name", "specialist", "description", "image", "agentPrompt".
// Do not include markdown formatting.`,
//     },
//   ],
// });

// const rawResp = completion.choices[0].message;
// console.log("OpenAI Raw:", rawResp.content);

// // Parse
// const cleaned = rawResp.content
//   ?.trim()
//   .replace("```json", "")
//   .replace("```", "");

// const parsed = JSON.parse(cleaned || "[]");
// return NextResponse.json(parsed);