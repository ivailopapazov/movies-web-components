import { html, render } from 'https://unpkg.com/lit-html?module';
import { getOneMovie } from '../services/movieServices.js';

const template = (ctx) => html`
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>${ctx.title}</h1>
    
            <div class="col-md-8">
                <img class="img-thumbnail" src="${ctx.imageUrl}" alt="${ctx.imageUrl}">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>"${ctx.description}"</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="#">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
`;

class MovieDetails extends HTMLElement {
    connectedCallback() {
        getOneMovie(this.location.params.id)
            .then(data => {
                Object.assign(this, data);
                this.render();
            });
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}

export default MovieDetails;
