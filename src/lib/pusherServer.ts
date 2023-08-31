import Pusher from "pusher";

const pusherServer = new Pusher({
    appId: process.env.PUSHER_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "eu",
    useTLS: true
});

export default pusherServer;