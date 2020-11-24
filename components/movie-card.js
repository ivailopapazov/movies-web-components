import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (ctx) => html`
    <div class="card mb-4">
        <img class="card-img-top" src="${ctx.data.imageUrl}" alt="${ctx.data.imageUrl}" width="400">
        <div class="card-body">
            <h4 class="card-title">${ctx.data.title}</h4>
        </div>
        <div class="card-footer">
            <a href="#/details/6lOxMFSMkML09wux6sAF"><button type="button" class="btn btn-info">Details</button></a>
        </div>
    </div>
`;

class MovieCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}

export default MovieCard;
