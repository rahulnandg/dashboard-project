import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Folder, FoldersIcon, LayoutDashboard, Newspaper, Settings, User, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const Sidebar = () => {
    return (
        <Command className=" bg-slate-100 dark:bg-slate-800 h-screen rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard />
                        <Link href={"/dashboard"}>
                            Dashboard
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper />
                        <Link href={"/posts"}>
                            Posts
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <FoldersIcon />
                        <Link href={"/categories"}>
                            Categories
                        </Link>

                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User />
                        <Link href={"/profile"}>
                            Profile
                        </Link>

                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Wallet />
                        <Link href={"#"}>
                            Billing
                        </Link>

                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>

                    <CommandItem>
                        <Settings />
                        <Link href={"/"}>
                            Settings
                        </Link>

                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>

    );
}

export default Sidebar;