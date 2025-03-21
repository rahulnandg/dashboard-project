import Image from "next/image";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Folder, MessageCircle, MessageCircleCode, Newspaper, User } from "lucide-react";
import PostTable from "./Components/posts/PostTable";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-4 ">
        <Dashboard title="Posts" count={100} icon={<Newspaper className="text-slate-500" size={72} />} />
        <Dashboard title="Categories" count={10} icon={<Folder className="text-slate-500" size={72} />} />
        <Dashboard title="Users" count={750} icon={<User className="text-slate-500" size={72} />} />
        <Dashboard title="Comments" count={1200} icon={<MessageCircle className="text-slate-500" size={72} />} />

      </div>

      <PostTable title="Latest Posts" limit={5}/>
    </div>

  );
}
