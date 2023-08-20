export default function Footer() {
    return (
        <footer className='text-muted-foreground border-t border-muted-foreground h-16 w-full flex flex-col justify-center text-center text-sm'>
            <div>
                <span className="whitespace-nowrap">&copy; Movie Database {new Date().getFullYear()}</span>
                {' '}
                <span className="whitespace-nowrap">| Data provided by <a className="hover:text-secondary" href="http://www.omdbapi.com/">OMDb API</a></span>
            </div>
        </footer>
    );
}
