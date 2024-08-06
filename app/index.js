window.sr=ScrollReveal();

    sr.reveal('.revealBottom', {
        duration: 1500,
        origin: 'bottom',
        distance: '1rem',
        delay: 100
    })
    sr.reveal('.revealLeft', {
        duration: 1000,
        origin: 'left',
        distance: '1rem',
        delay: 100
    })
    sr.reveal('.revealRight', {
        duration: 1000,
        origin: 'right',
        distance: '1rem',
        delay: 100
    })
    sr.reveal('.revealTop', {
        duration: 1000,
        origin: 'top',
        distance: '1rem',
        delay: 100
    })
    sr.reveal('.revealLeftDelay', {
        duration: 1000,
        origin: 'left',
        distance: '1rem',
        delay: 500
    })
    sr.reveal('.revealTopDelay', {
        duration: 1000,
        origin: 'top',
        distance: '1rem',
        delay: 250
    })
    if(screen.width > 925){
        sr.reveal('.revealLeft--1', {
            duration: 1000,
            origin: 'left',
            distance: '1rem',
            delay: 150
        })
        sr.reveal('.revealLeft--2', {
            duration: 1000,
            origin: 'left',
            distance: '1rem',
            delay: 250
        })
        sr.reveal('.revealLeft--3', {
            duration: 1000,
            origin: 'left',
            distance: '1rem',
            delay: 350
        })
    }
    sr.reveal('.revealRightIllustration', {
        duration: 1000,
        origin: 'right',
        distance: '1rem',
        delay: 150,
        
    })
    ;