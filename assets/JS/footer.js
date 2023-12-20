class footer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        <style>
        footer {
            background-color: #ffb41f;
            height: 150px;
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
        }
        footer>a{
            color: white;
            padding: 20px;
            border-radius: 20px;
            position: absolute;
            left: 50%;
            top: 30%;
            background-color: #011627;
            text-decoration: none;
            box-shadow: white -5px 5px;
            margin: 10px 10px;
        }
        footer>a:active{
            
            box-shadow: none;
            margin: 15px -10px;
            border: 1px solid #ffb41f;
            
        }
    </style>
    <footer>
        <a href="/index.html">Home</a>
    </footer>


        `
    }
}
customElements.define('my-footer',footer);