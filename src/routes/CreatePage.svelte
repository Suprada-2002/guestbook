<script>
    import { addDoc, collection } from 'firebase/firestore';
    import {db} from '../lib/firebase';

    let book = {
        id:"",
        title:"",
        message:""
    }

    const addMessage = async() => {
        try{
            await addDoc(collection( db, "guestbook"), {
                ...book,
                createdAt: Date.now(),
            });
            alert("Your Message is Added");
        }catch(error){
            console.log(error);
        }
    }

    let handleSubmit = () => {
        if(book.title === ""){
            alert("Enter your name or gmail");
            return;
        }
        if(book.message === ""){
            alert("Enter some message");
            return;
        }
        addMessage();
        book = { title:"", message:""}
    }
</script>

<div class="wrapper">
    <h3>Sign My GuestBook | Leave a message for me</h3>

    <form on:submit|preventDefault={handleSubmit} >
        <div class="formInput">
            <label for="title" id="title" >UserName or Mail:</label>
            <input
            type="text"
            bind:value={book.title}
            placeholder="Your name or mail.."
            class="input first"
            />
        </div>
        <div class="formInput">
            <label for="message" id="message" >Message:</label>
            <textarea
            type="text"
            bind:value={book.message}
            placeholder="Leave a message and a mail, so that i can reach out to you"
            class="input second"
            />
        </div>
        <div class="btn">
            <button>Done</button>
        </div>
    </form>

</div>

<style>
    .wrapper {
        width: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
    }
    h3 {
        margin: 2px;
        padding: 0;
        font-weight: 300;
    }
    .formInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
    }
    .first{
        width: 100%;
    }
    #title, #message {
        padding: 10px;
    }
    .second{
        width: 500px;
        height: 100px;
        color: #000;
    }
    .btn{
        display: grid;
        place-items: center;
        padding: 10px 0px;
    }

    button{
        padding: 5x 10px;
        font-size: 15px;
        cursor: pointer;
        font-weight: 600;
        border: 2px solid orange
    }

   @media screen and (max-width:900px){
    .wrapper{
        width: 100vw;
        padding: 0px 10px;
        display: grid;
        place-items: center;
    }
    .formInput{
        margin: 0px 10px;
    }
    .second{
        width: 100vw;
    }
   }
</style>