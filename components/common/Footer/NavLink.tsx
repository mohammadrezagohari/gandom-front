import Link from 'next/link';
import cn from 'classnames';
import { FunctionComponent } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export interface NavLinkProps {
    title: string;
    href: string;
    // Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
    // isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({/*  Icon,  */title,  href }) => {
    const { t } = useTranslation('translation');
    // console.log("isActive:", isActive);
    const { pathname } = useRouter();
    console.log("pathname:", pathname);

    return (
        <Link href={href}>
            {/* <div
                className={cn(
                    'w-1/4 flex flex-col justify-center hover:bg-gray-250 items-center cursor-pointer transition-all duration-300   ',
                    isActive ? 'text-green-550' : 'text-gray-500',
                )}
            > */}
            <div className={cn("block py-2 pr-4 pl-3 text-gray-light border-b-2 border-transparent cursor-pointer hover:border-dark hover:text-dark hover:dark:border-gold dark:hover:text-gold dark:text-gray-light transition duration-200 ease-in-out",
                href === pathname ? "border-b-2 border-dark dark:border-gold text-dark dark:text-gold" : "hover:bg-gold")}>{t(title)}</div>
            {/* <div
                    className={cn(
                        'font-bold pt-1 text-xs transition-all duration-300 ',
                        isActive && 'font-bold',
                    )}
                >
                    {title}
                </div> */}
            {/* </div> */}
        </Link>
    );
};

export default NavLink;
