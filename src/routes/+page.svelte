<script>
    import { onMount } from "svelte";
    import {db} from '../lib/firebase';
    import {onSnapshot,collection} from 'firebase/firestore';
    import CreatePage from "./CreatePage.svelte";

    let collRef = collection(db, "guestbook");
    let messages = [];
    let emojis = [];
    let showMessages = false;
    
    onMount(() => {
        onSnapshot(collRef, async (qsnapshot) => {
            let fbGuestbook = [];
            qsnapshot.forEach((doc) => {
                let book = {...doc.data(), id:doc.id}
                fbGuestbook = [book, ...fbGuestbook];
            })
            //console.table(fbGuestbook);
            
            messages = fbGuestbook;
            await getEmoji(fbGuestbook.length);
            showMessages = true;
        })
       
    });

    async function getEmoji(len) {
        const res = await fetch("/lol?q=" + len);
        emojis = await res.json();
    }
</script>

<svelte:head>
	<title>Suprada Tripathy - GuestBook</title>
</svelte:head>

<CreatePage />
<div class="wrapper">
    {#if showMessages}
    <div class="messages">
        {#each messages as message, i}
            <div class="message">
                <div class="emoji">{emojis[i]}<span>{message.title}</span></div>
                <p>{message.message}</p>
            </div>
        {/each}
    </div>
    {/if}
</div>

<style>

    p{
        margin: 0;
        padding: 0;
        font-weight: 300;
    }
    span{
        border-bottom: 1px solid orange;
        font-size: 15px;
    }
    .wrapper{
        padding: 10px 0px;
        width: 70vw;
        border-top: 1px solid orange;
    }
    .messages{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .message{
        padding: 10px 10px;
        margin: 0 auto;
        border-radius: 10px;
        border: 2px solid rgba(128, 128, 128, 0.207);
    }
    .emoji {
        font-size: 30px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    @media screen and (max-width: 900px){
        .wrapper{
            width: 90vw;
        }
    }
</style>