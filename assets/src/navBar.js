


export default class NavBar{

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
    }
}

