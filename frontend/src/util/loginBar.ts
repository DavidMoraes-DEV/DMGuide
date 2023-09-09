/*export function loginBar(statusLogin: String) {
    const login = document.querySelector(id);

    statusLogin == false
        ? login?.classList.add('click-login-register')
        : login?.classList.remove('click-login-register');

    return statusLogin == false ? (statusLogin = true) : (statusLogin = false);
}

export function searchBar(statusSearch: String) {
    const search = document.querySelector(id);

    statusSearch == false
        ? search?.classList.add('click-search')
        : search?.classList.remove('click-search');

    return statusSearch == false ? (statusSearch = true) : (statusSearch = false);
}

let statusRegisterCard = false;
let statusLoginCard = false;
*/

export function hiddenRegisterCard(status: boolean, elementId: string) {
    const registerCard = document.querySelector(elementId);

    status == false
        ? registerCard?.classList.add('')
        : registerCard?.classList.remove('');

    return status == false
        ? (status = true)
        : (status = false);
}

export function hiddenLoginCard(status: boolean, elementId: Element) {

    status == false
        ? elementId?.classList.add("click-login-card-hidden")
        : elementId?.classList.remove("click-login-card-hidden");

    return status == false ? (status = true) : (status = false);

}
