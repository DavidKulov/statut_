o2.receipts = {

	images: document.querySelectorAll('.receipts__middle-slider .receipts__middle-banner'),
	sliderLine: document.querySelector('.receipts__middle-slider'),
	count: 0,
	width: '',

	init()
	{
		this.width = document.querySelector('.receipts__middle-banner').offsetWidth;
		this.resize();
		this.rollSlider();
		window.addEventListener('resize', () => this.resize());
	},

	next()
	{
		this.count++;
		if (this.count >= this.images.length - 3) {
			this.count = 0;
		}
		this.rollSlider();
	},

	prev()
	{
		this.count--;
		if (this.count < 0) {
			this.count = this.images.length - 4;
		}
		this.rollSlider();
	},

	resize()
	{
		const wrapperWidth = document.querySelector('.receipts__middle').offsetWidth;
		let width = 0;

		if(window.innerWidth > 374)
		{
			width = wrapperWidth / 2;
		}

		if(window.innerWidth > 605)
		{
			width = wrapperWidth / 2;
		}

		if(window.innerWidth > 1024)
		{
			width = wrapperWidth / 4;
		}

		if(window.innerWidth > 1440)
		{
			width = wrapperWidth / 4;
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