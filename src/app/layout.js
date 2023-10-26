import { Hanken_Grotesk } from 'next/font/google'
import '../style/globals.css'
import { Toaster } from 'react-hot-toast'
import MainWrapper from '@/components/layout/mainWrapper'

const hanken_Grotesk = Hanken_Grotesk({
    subsets: ['latin'],
    variable: '--font-haken_Grotesk',
    display: "swap"
})

export const metadata = {
    title: 'Pokemons Test Challenge | Trustcrow',
    description: 'Trustcrow safeguards buyers and sellers from default by escrowing funds between transacting parties until agreed goods, services or assets are delivered.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${hanken_Grotesk.variable}`}>
            <body suppressHydrationWarning={true}>
                <Toaster position="top-center" reverseOrder={false} gutter={8} />
                <MainWrapper>
                    {children}
                </MainWrapper>
            </body>
        </html>
    )
}
