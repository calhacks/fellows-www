const {
    StyledComponent,
} = Torus;

const FELLOWS = [
    {
        name: 'DeWaste',
        title: 'For hackers who believe in a zero-waste world.',
        body: 'DeWaste doin good work',
        img: '/assets/hero-carousel/dewaste.jpg',
    },
    {
        name: 'UCharify',
        title: 'For hackers who empower charities',
        body: 'UCharify! Amazing',
        img: '/assets/hero-carousel/ucharify.jpg',
    },
];

const FellowCarouselCard = fellowData => {
    return jdom`<div class="fellowCarouselCard">
        <div class="fccBackgroundImage">
            <img src="${fellowData.img}" alt="${fellowData.name}">
        </div>
        <div class="fccTitle">${fellowData.title}</div>
        <div class="fccBody">${fellowData.body}</div>
    </div>`;
}

class FellowCarousel extends StyledComponent {

    init() {
        this.index = 0;
        this.handleCarouselFlip = this.handleCarouselFlip.bind(this);
    }

    handleCarouselFlip(evt) {
        this.index ++;
        if (this.index >= FELLOWS.length) {
            this.index = 0;
        }
        this.render();
    }

    compose() {
        return jdom`<div class="fellowCarousel">
            <button class="nextCardButton" onclick="${this.handleCarouselFlip}">Next</button>
            ${FellowCarouselCard(FELLOWS[this.index])}
        </div>`
    }

}

const carouselWrapper = document.getElementById('carouselWrapper');
carouselWrapper.replaceChild(new FellowCarousel().node, carouselWrapper.children[0]);
