export function deleteCookie(){
    let data = new Date('1977-11-18');
    document.cookie = `login=ApagaduMuahahaha; expires=${data.toUTCString()}`;

    window.location.replace('index.html');
}

export function createCookie(form, manter, dias){
    let data = new Date();
        data.setDate(data.getDate() + dias);
        document.cookie = `login=${form.login.value}:${form.senha.value};` +
                                                                `${(manter) ? `expires=${data.toUTCString()}` : ''}`;
}

export function getCookie(chave){
    let cookieBom = document.cookie;
    let quebrarCookie = cookieBom.split('; ');
    let gotas = '=';
    let pedacinhos = ':';

    for(var cookiesGotasChocolate of quebrarCookie) {
        let cookieSemGotas = cookiesGotasChocolate.split(gotas);

        if(cookieSemGotas[0] == chave){
            let pedacinhosCookie = cookieSemGotas[1].split(pedacinhos);

            return pedacinhosCookie[0];
        }
    }

    return false;   
}