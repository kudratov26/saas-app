'use client';

import { formUrlQuery } from '@jsmastery/utils';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "topic",
                value: searchQuery,
            });

            router.push(newUrl);
        }, 500)

    }, [searchQuery, router, pathname, searchParams])


    return (
        <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
            <Image src={"/icons/search.svg"} alt="search" width={15} height={15} />
            <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full outline-none" />
        </div>
    )
}

export default SearchInput