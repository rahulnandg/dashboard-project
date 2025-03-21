export interface Post {
    id: string,
    title: string,
    body: string,
    author: string,
    date: number,
    comments: PostComments[]
}

export interface PostComments {
    id: string,
    text: string,
    username: string
}