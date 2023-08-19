export default function Footer() {
    return (
        <footer className='text-muted-foreground border-t border-accent h-16 w-full flex flex-col justify-center text-center text-sm'>
            <span className="whitespace-nowrap">Copyright &copy; {new Date().getFullYear()} Movie Database.</span>
        </footer>
    );
}
