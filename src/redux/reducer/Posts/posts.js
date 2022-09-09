import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { id: 0, date: sub(new Date(), { minutes: 10 }).toISOString(), title: "The bmw cars", content: "the new bmw cars are in Iran", userId: 0 , reactions : {thumbsUp : 0,wow : 0 , heart : 0 , rocket : 0 , coffee : 0} },
    { id: 1, date: sub(new Date(), { minutes: 5 }).toISOString(), title: "The Benz cars", content: "the new Benz cars are in Iran", userId: 1, reactions : {thumbsUp : 0,wow : 0 , heart : 0 , rocket : 0 , coffee : 0} }
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions : {thumbsUp : 0,wow : 0 , heart : 0 , rocket : 0 , coffee : 0}
                    }
                }
            }
        },
        reactionAdded(state , action){
            const { postId , reaction } = action.payload;
            const existingPosts = state.find(i=> i.id == postId)
            if(existingPosts){
                existingPosts.reactions[reaction]++
            }
        }
    }

})

export const allPosts = (state) => state.posts;

export const { addPosts , reactionAdded } = postsSlice.actions;

export default postsSlice.reducer