import { DesktopNavbar } from "@/components/navbar/desktop-navbar";
import { MobileNavbar } from "@/components/navbar/mobile-navbar";

export function Navbar() {
    return (
        <>
            <MobileNavbar className="sm:hidden" />
            <DesktopNavbar className="hidden sm:flex" />
        </>
    );
}
