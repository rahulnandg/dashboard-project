import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LayoutDashboard, LucideIcon, Newspaper } from "lucide-react";

interface DashboardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>
}


const Dashboard = ({title,count,icon}: DashboardProps) => {
    return (
        <Card className="bg-slate-200 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl font-bold text-center text-slate-500 dark:text-slate-200 pb-2">{title}</h3>
                <div className="flex gap-5 justify-center items-center  pb-2">
                    {icon}
                    <h3 className="text-5xl text-slate-500 font-semibold">{count}</h3>
                </div>
                <div>

                </div>

            </CardContent>

        </Card >

    );
}

export default Dashboard;