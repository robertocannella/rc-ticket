/**
 * This class handles the user menu (the one with the little photo)
 *
 *
 */


export default class UserMenu {

    constructor() {

        this.userMenuButton = document.getElementById('user-menu-button');
        this.userMenu = document.getElementById('user-menu');

        this.toggleUserMenu = this.toggleUserMenu.bind(this)

        this.events();
    }

    events(){

        this.userMenuButton.addEventListener('click',()=>{this.toggleUserMenu()})
    }

    toggleUserMenu(){

        this.userMenu.classList.toggle('hidden');

        setTimeout((e)=>{
            window.addEventListener('click',(e)=>{
                this.userMenu.classList.toggle('hidden');
            },{once: true})
        },500)


    }


}

