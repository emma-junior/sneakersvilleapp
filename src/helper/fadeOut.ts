const fadeOut = (e:any) => {
    const loader = e.currentTarget.nextElementSibling;
    loader.style.opacity = 0;
}

export default fadeOut;