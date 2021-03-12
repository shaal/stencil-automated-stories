import { Component, Element, h, Host, Prop } from '@stencil/core';
import KeenSlider from 'keen-slider';

import { IconTypeOutline } from '../outline-icon/config';

/**
 * Slider component. Receives a set of slides.
 * @element outline-slider
 * @slot slides - The slot containing the slide elements
 */
@Component({
  tag: 'outline-slider',
  styleUrl: 'outline-slider.css',
  shadow: true,
})
export class OutlineSlider {
  /**
   * The actual element of this Hero slideshow
   */
  @Element() el: HTMLOutlineSliderElement;

  /**
   * Whether to display navigation arrows to switch slides
   */
  @Prop({ reflect: true }) displayArrows = true;

  /**
   * Whether to display navigation dots to switch slides
   */
  @Prop({ reflect: true }) displayDots = true;

  /**
   * Whether to automatically advance slides
   */
  @Prop({ reflect: true }) autoplay = false;

  /**
   * Whether to infinitely loop slides
   */
  @Prop({ reflect: true }) loop = false;

  /**
   * Whether the slider has been initialized
   */
  @Prop({ reflect: true }) initialized = false;

  /**
   * Delay between slides change (miliseconds, requires active autoplay)
   */
  @Prop() duration = 5000;

  /**
   * Number of slides to display (e.g. use 1.5 to display one and a half slides)
   */
  @Prop() slidesToDisplay = 1;

  /**
   * Spacing between slides
   */
  @Prop() spacing = 32;

  /**
   * Interval for slide changes on autoplay
   */
  private autoPlayInterval: ReturnType<typeof setInterval>;

  /**
   * Holds the instance of the slider once is initialized
   */
  private slider: ReturnType<typeof Object>;

  /**
   * Holds the slider details (what the `detail` method returns)
   */
  private sliderDetails: ReturnType<typeof Object>;

  /**
   * References to the navigation dots placeholder DOM element
   */
  private dotsContainer: HTMLElement;

  private initializeSlider = () => {
    const container = this.el.querySelector<HTMLElement>('.slides-collection');

    this.slider = new KeenSlider(container, {
      slidesPerView: this.slidesToDisplay,
      spacing: this.spacing,
      loop: this.loop,
      created: instance => {
        this.initialized = true;
        this.sliderDetails = instance.details();
        this.handleAutoplay(true);
        this.addNavigationDots();
      },
      dragEnd: () => this.handleAutoplay(true),
      dragStart: () => this.handleAutoplay(false),
      slideChanged: () => this.handleStatus(),
    });
  };

  private addNavigationDots = () => {
    if (!this.displayDots) return;
    [...Array(this.sliderDetails.size).keys()].map(slide => {
      const dot = document.createElement('button');
      dot.innerHTML = `Go to slide ${slide + 1}`;
      dot.classList.add('dot');
      this.dotsContainer.appendChild(dot);
      dot.addEventListener('click', () => {
        this.goToSlide(slide);
      });
    });
  };

  private goToSlide = slide => {
    this.slider.moveToSlide(slide);
    this.handleAutoplay(this.autoplay);
  };

  private handleAutoplay = (run: boolean) => {
    if (!this.autoplay) return;

    clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = setInterval(() => {
      if (run) {
        this.nextSlide();
      }
    }, this.duration);
  };

  private handleStatus = () => {
    if (!this.slider) return;

    // set active slide in dots navigation
    if (this.displayDots) {
      const dots = this.dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        index === this.slider.details().relativeSlide
          ? dot.classList.add('dot--active')
          : dot.classList.remove('dot--active');
      });
    }
  };

  private nextSlide = () => {
    if (!this.slider) return;
    this.slider.next();
    this.handleAutoplay(this.autoplay);
  };

  private prevSlide = () => {
    if (!this.slider) return;
    this.slider.prev();
    this.handleAutoplay(this.autoplay);
  };

  componentDidLoad() {
    this.initializeSlider();
    this.handleStatus();
  }

  render() {
    return (
      <Host>
        <div class="slides-wrapper">
          <slot name="slides" />
          {this.displayArrows && (
            <button
              class="slides-button slides-previous"
              onClick={this.prevSlide}
              type="button"
            >
              <outline-icon icon={IconTypeOutline.ARROW_CIRCLE_LEFT_OUTLINE} />
            </button>
          )}

          {this.displayArrows && (
            <button
              class="slides-button slides-next"
              onClick={this.nextSlide}
              type="button"
            >
              <outline-icon icon={IconTypeOutline.ARROW_CIRCLE_RIGHT_OUTLINE} />
            </button>
          )}
        </div>
        {this.displayDots && (
          <div class="slides-dots" ref={el => (this.dotsContainer = el)} />
        )}
      </Host>
    );
  }
}
