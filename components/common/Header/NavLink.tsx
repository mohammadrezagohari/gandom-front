import Link from 'next/link';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export interface NavLinkProps {
    title: string,
    href: string
}

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {

    const { t } = useTranslation('translation');
    const { pathname } = useRouter();

    return (
        <Link href={href} passHref>
            <div className={cn("block pt-2 pr-4 pl-3 md:pr-1 md:pl-1 text-gray-light border-b-2 border-transparent cursor-pointer hover:border-dark hover:text-dark hover:dark:border-gold dark:hover:text-gold dark:text-gray-light transition duration-200 ease-in-out",
                href === pathname ? "border-b-2 border-black dark:border-gold text-dark dark:text-gold" : "")}>
                <span className="text-justify font-light font-Poppins rtl:font-Yekanbakh block text-base">{t(title)}</span>
            </div>
        </Link>
    );
};

export default NavLink;
