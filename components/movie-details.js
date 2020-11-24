import { html, render } from 'https://unpkg.com/lit-html?module';
import { getOneMovie, likeMovie } from '../services/movieServices.js';
import { getUserData } from '../services/authServices.js';

const hasLiked = (likes, email) => {
    return Object
        .values(likes)
        .some(like => like.creator == email);
}

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
                ${ctx.creator == ctx.user.email
                    ? html`
                        <a class="btn btn-danger" href="#">Delete</a>
                        <a class="btn btn-warning" href="#">Edit</a>
                    `
                    : html `
                        ${hasLiked(ctx.likes, ctx.user.email)
                            ? html`<span class="enrolled-span">Liked ${Object.keys(ctx.likes).length}</span>`
                            : html`<a class="btn btn-primary" @click=${ctx.onLike}>Like</a>`
                        }
                    `
                }
            </div>
        </div>
    </div>
`;

class MovieDetails extends HTMLElement {
    constructor() {
        super();

        this.user = getUserData();
    }
    
    connectedCallback() {
        getOneMovie(this.location.params.id)
            .then(data => {
                Object.assign(this, data);
                this.render();
            });
    }

    onLike(e) {
        likeMovie(this.location.params.id, this.user.email)
            .then(data => {
                this.requestUpdate();
            });
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}

export default MovieDetails;
