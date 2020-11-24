import { html, render } from 'https://unpkg.com/lit-html?module';

const template = () => html`
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
            class="img-fluid" alt="Responsive image">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
`;

class Home extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(template(), this);
    }
};

export default Home;