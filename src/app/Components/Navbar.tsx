
import Image from "next/image";
import logo from "../../../public/images/logo.png"
import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    return (

        <div className="bg-primary dark:bg-slate-800 text-white flex justify-between items-center px-5 py-2 text-3xl">
            <Link href="/">
                <Image src={logo} alt="logo" width={40} />
            </Link>



            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none cursor-pointer">
                    <Avatar>
                        <AvatarImage src={"https://github.com/shadcn.png"} alt="@avatar" width={40} />
                        <AvatarFallback>SD</AvatarFallback>

                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>



        </div>




    );
}

export default Navbar;