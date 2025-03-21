import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
} from "@/components/ui/table"
import { Posts } from "@/data/constData";
import Link from "next/link";

interface PostTablesProp {
    limit?: number;
    title?: string
}

const PostTable = ({ limit, title }: PostTablesProp) => {
    return (
        <div>
            <h3 className="text-2xl font-semibold">
                {title ? title : "Posts"}
            </h3>
            <Table className="mt-4">
                <TableCaption>A list of recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="text-right hidden md:table-cell">{post.date}</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default PostTable;