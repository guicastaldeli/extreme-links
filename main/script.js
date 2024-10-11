//Appends...
    //Logo...
        const logo = $('<img id="lg-" src="./img/extremeNv.png"></img>');

        $('#container').append(logo);
    //

    //WhatsApp...
        const btnWhats = $('<button id="btn-w-rdrct--"></div>');
        const pWhats = $('<p id="p-w--">WhatsApp</p>');

        btnWhats.append(pWhats);

        $('#container').append(btnWhats);
    //

    //Instagram...
        const btnInsta = $('<button id="btn-i-rdrct--"></button>');
        const pInsta = $('<p id="p-i--">Instagram</p>');

        btnInsta.append(pInsta);

        $('#container').append(btnInsta);
    //

    //Facebook...
        const btnFace = $('<button id="btn-f-rdrct--"></button>');
        const pFace = $('<p id="p-f--">Facebook</p>');
        
        btnFace.append(pFace);

        $('#container').append(btnFace);
    //

    //YouTube...
        const btnYt = $('<button id="btn-yt-rdrct--"></button>');
        const pYt = $('<p id="p-yt--">YouTube</p>');

        btnYt.append(pYt);

        $('#container').append(btnYt);
    //
//

//Functions...
    //WhatsApp...
        function rdrctWhats__() {
            $(btnWhats).click(() => {
                window.location.href = 'https://wa.me/5566999038012';
            })
        }

        rdrctWhats__();
    //

    //Instagram...
        function rdrctInsta__() {
            $(btnInsta).click(() => {
               window.location.href = 'https://www.instagram.com/extremeautosomroo/' 
            });
        }

        rdrctInsta__();
    //

    //Facebook...
        function rdrctFace__() {
            $(btnFace).click(() => {
                window.location.href = 'https://www.facebook.com/extremeautosomroo';
            })
        }

        rdrctFace__();
    //

    //YouTube...
        function rdrctYt__() {
            $(btnYt).click(() => {
                window.location.href = 'https://www.youtube.com/@ExtremeAutoSomRoo?sub_confirmation=1';
            })
        }

        rdrctYt__();
    //
//