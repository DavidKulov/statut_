o2.stock =
{
	images: document.querySelectorAll('.stock__slider-item img'),
	sliderLine: document.querySelector('.stock__slider-item'),
	count: 0,
	width: '',

	init()
	{
		this.width = document.querySelector('.stock__slider').offsetWidth;
		this.sliderLine.style.width = this.width * this.images.length + 'px';
		this.images.forEach(item => {
			item.style.width = this.width + 'px';
			item.style.height = '100%';
		});
		this.rollSlider();
	},
	next()
	{
		this.count++;
		if (this.count >= this.images.length) {
			this.count = 0;
		}
		this.rollSlider();
	},

	prev()
	{
		this.count--;
		if (this.count < 0) {
			this.count = this.images.length - 1;
		}
		this.rollSlider();
	},

	rollSlider()
	{
		this.sliderLine.style.transform = 'translate(-' + this.count * this.width + 'px)';
	}
}
