const emojis= ["🐈","🦮", "🐇", "🌞","🎄","🪸","🐞","🐼","🐥","🐯","🐱","🦋","🦚","🌸","❄️","🍹","🍨","🥪","🧩","🏵"]

export const GET = () => {
    const index = Math.floor(Math.random() * emojis.length);
    return new Response(emojis[index]);
}