o2.news = {

	images: document.querySelectorAll('.news__article'),
	sliderLine: document.querySelector('.news__middle-slide'),
	count: 0,
	width: '',

	init()
	{
		this.width = document.querySelector('.news__article').offsetWidth;
		this.resize();
		this.rollSlider();
		window.addEventListener('resize', () => this.resize());
	},

	next()
	{
		this.count++;
		if (this.count >= this.images.length - 2) {
			this.count = 0;
		}
		this.rollSlider();
	},

	prev()
	{
		this.count--;
		if (this.count < 0) {
			this.count = this.images.length - 3;
		}
		this.rollSlider();
	},

	resize()
	{
		const wrapperWidth = document.querySelector('.news__middle').offsetWidth;
		let width = 0;

		if(window.innerWidth > 374)
		{
			width = wrapperWidth / 1;
		}

		if(window.innerWidth > 780)
		{
			width = wrapperWidth / 2;
		}

		if(window.innerWidth > 1150)
		{
			width = wrapperWidth / 3;
		}

		this.width = width;
		this.sliderLine.style.width = this.width * this.images.length + 'px';
		for(let image of this.images)
		{
			image.style.width = width + 'px';
			image.style.minWidth = width + 'px';
		}

		this.rollSlider();
	},

	rollSlider()
	{
		this.sliderLine.style.transform = 'translate(-' + this.count * this.width + 'px)';
	}

}