import { html, render, nothing } from 'https://unpkg.com/lit-html?module';
import { getUserData } from '../services/authServices.js';

const template = (ctx) => html`
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
            class="img-fluid" alt="Responsive image">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
    ${ctx.isAuthenticated
        ? html`<movies-component></movies-component>`
        : nothing
    }
`;

class Home extends HTMLElement {
    connectedCallback() {
        console.log('connected home');
        
        Object.assign(this, getUserData())
        
        this.render();
    }

    onBeforeEnter(location, commands) {
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
};

export default Home;