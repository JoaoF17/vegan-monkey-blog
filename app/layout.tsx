import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
	title: 'Vegan Monkey Blog',
	description: 'A blog by Vegan Monkey.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='dark:bg-slate-800'>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
