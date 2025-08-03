
# 🩺 Voice-Based Medical AI Agent

**Talk to an AI Doctor — like it's real (voice included).**  
A full-stack voice-enabled **Medical AI Agent** that simulates real consultations with AI-specialist doctors. Built with Next.js, Gemini 2.0, VAPI, and more.

- 🧪 Live Demo / LinkedIn Post: [Watch Here](https://www.linkedin.com/feed/update/urn:li:ugcPost:7357870755990134786/)

---

## 🌟 Features

- 🔊 **Real-Time Voice Consultation**: Talk naturally with the AI like you would with a real doctor.
- 🧑‍⚕️ **10+ Doctor Specializations**: Includes General Physician, ENT, Cardiologist, Orthopedist, and more.
- 🔐 **Authentication**: Login with Google or phone number using Clerk.
- 💬 **AI Intelligence**: Gemini 2.0 Flash via OpenRouter.ai handles medical reasoning.
- 🧠 **Memory & Context**: Patient data stored in PostgreSQL via Drizzle ORM.
- 🖥️ **Fully Responsive UI**: Built with modern frontend frameworks using Next.js.

---

## ⚙️ Tech Stack

| Layer         | Tech Used                                  |
|---------------|---------------------------------------------|
| Frontend      | **Next.js 14 (App Router)**, Tailwind CSS  |
| AI Backend    | **Gemini 2.0 Flash** via OpenRouter.ai      |
| Voice Layer   | [**VAPI.ai**](https://vapi.ai)              |
| Auth          | [**Clerk.dev**](https://clerk.dev)          |
| Database      | **Neon PostgreSQL** + **Drizzle ORM**       |
| Font          | [**Geist**](https://vercel.com/font)        |
| Hosting       | **Vercel**                                  |

---

## 🧪 How It Works

1. **Sign In** using Google or phone number (Clerk Auth).
2. **Choose a Doctor** specialization.
3. **Describe Your Symptoms** in text.
4. **Start a Voice Chat** with the AI doctor using VAPI.

Everything is handled in real-time with voice playback and streamed AI responses.

---

## 🔮 Future Enhancements

- 📄 AI-generated PDF health reports
- 💳 Subscription & payment gateway (Stripe)
- 🏥 Integration with real-world medical APIs
- 🗓️ Appointment scheduling and health history

---

## 📦 Project Setup

This project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 🔧 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/ai-medical-voice-agent.git
cd ai-medical-voice-agent
npm install
```

### 🚀 Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.


## 📘 Learn More

To learn more about the tech behind this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [VAPI Docs](https://docs.vapi.ai)
- [Clerk Auth Docs](https://clerk.dev/docs)
- [OpenRouter Docs](https://openrouter.ai/docs)

---

## 🚀 Deploy on Vercel

The easiest way to deploy this app is through [Vercel](https://vercel.com/new).  
See [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying) for setup instructions.

---

## 🙌 Author

**Danush Rajaram**  
Connect with me on [LinkedIn](https://www.linkedin.com/in/danushrajaram)  
Follow for more projects in AI, data, and product development!

---

> *Built with ❤️ by a data guy who codes and dreams in React.*
