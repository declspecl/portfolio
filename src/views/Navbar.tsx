import { MobileNavbar } from "@/components/navbar/MobileNavbar";
import { DesktopNavbar } from "@/components/navbar/DesktopNavbar";

export function Navbar() {
	return (
		<>
			<MobileNavbar className="sm:hidden" />
			<DesktopNavbar className="hidden sm:flex" />
		</>
	);
}
