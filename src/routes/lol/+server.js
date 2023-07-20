const emojis= ["🐈","🦮", "🐇", "🌞","🎄","🪸","🐞","🐼","🐥","🐯","🐱","🦋","🦚","🌸","❄️","🍹","🍨","🥪","🧩","🏵"]

export const GET = ({ url }) => {
    const count = url.searchParams.get("q");
    const temp = new Array(count);
    for (let i = 0; i < count; i++) {
        temp[i] = emojis[Math.floor(Math.random() * emojis.length)];
    }
    return new Response(JSON.stringify(temp));
}