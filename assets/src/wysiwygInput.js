/**
 * This class handle the WYSISYG Tool
 */


export default class WYSIWYGTool{

    constructor() {
        this.wysiwygButtons = document.querySelectorAll('.wysiwyg-btn');
        this.contentContainer = document.querySelector('.wysiwyg-content');

        this.events = this.events.bind(this);

        this.events();
    }
    events(){
        this.wysiwygButtons.forEach((button)=>{
            button.addEventListener('click',()=>{

                const command = button.dataset['element'];

                if (command === 'createLink' || command === 'insertimage'){
                    let url = prompt("url");
                    document.execCommand(command,false,url)
                }else{
                    document.execCommand(command,false,null);
                }
                this.addListIcons();
            })
        })
    }
    addListIcons (){
        const ulElements = this.contentContainer.querySelectorAll('ul li');
        ulElements.forEach(element=>{
                element.classList.add('list-disc')
        })
        const olElements = this.contentContainer.querySelectorAll('ol li');
        olElements.forEach(element=>{
            element.classList.add('list-decimal')
        })
    }
}