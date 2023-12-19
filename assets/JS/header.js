class header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        <style>
        header{
            text-align: left;
            border-bottom: 1px solid #011627;
            background-color: #ffb41f;
            padding: 20PX;
        }
        .logo{
            height: 150px;
            margin-top: -50px;
            display: block;
        }
        .logo > #logo{
            width:14%;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: right;
            position: relative;
            top:-35px;
        }
        nav ul li a {
            text-decoration: none;
            color: #011627;
            padding: 15px 20px;
            border: 0px solid #fff;
            background-color: #fff;
            border-radius: 15px;
            margin: 10px 10px;
            box-shadow: #011627 -5px 5px;
            
        }
        a:active {
            box-shadow: none;
            margin: 5px 15px;
            border: 1px solid #011627;
            
            
        }
        </style>
        <header>
        <div class="logo"><img src="/assets/Images/Logo/1.svg" alt="Logo" id="logo" href="index.html" ></div>
        
        <nav>
            
            <ul>
                <li><a class="menuCabeçalho" href="Pages/Contact/contact.html">Contact</a></li>
                <li><a class="menuCabeçalho" href="Pages/Who am i/whoAmI.html">Who am I</a></li>
                <li><a class="menuCabeçalho" href="Pages/Projects/bullsAndCows.html">Projects</a></li>
                <li><a href="/assets/Document/Currículo André Carvalho (1).pdf" class="Download_CV">Download Resume</a></li>
            </ul>
            
        </nav>
        
        </header>


        `
    }
}
customElements.define('my-header',header);