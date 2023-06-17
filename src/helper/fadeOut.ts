const fadeOut = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const loader = e.currentTarget.nextElementSibling as HTMLElement;
    if (loader) {
        loader.style.opacity = '0';
    }
}

export default fadeOut;