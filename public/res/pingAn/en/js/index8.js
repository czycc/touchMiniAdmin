$(function () {
	var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    if (isAndroid) {
      $('#file').attr('capture', 'camera')
    }
	var BGM = $('#bgm')[0];
	document.addEventListener("WeixinJSBridgeReady", function () {
		BGM.play();
	}, false);
	document.addEventListener('touchstart', firstTouch);
	function firstTouch() {
		BGM.play();
		document.removeEventListener('touchstart', firstTouch);
	}
	var userInfo = {}
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		initialSlide: 0,
		on: {
			init: function () {
				swiperAnimateCache(this)
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function () {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			}
		}
	})
	$('.updateImg #file').on('change', (e) => {
		var reader = new FileReader()
		reader.readAsDataURL(e.target.files[0])
		reader.onload = function (e) {
			var img = new Image()
			img.src = reader.result
			if (reader.result.length <= 100000) {
				goStage2(reader.result)
			} else {
				img.onload = function () {
					var base64Img = compress(img)
					goStage2(base64Img)
				}
			}

		};
	})
	function goStage2(base64Img) {
		$('.businessCard img').attr('src', base64Img)
		if ($('.businessCard img').attr('src') === base64Img) {
			$('.stage1').hide()
			$('.stage2').show()
			userInfo.firstName = $('.stage1 .firstName').val()
			userInfo.lastName = $('.stage1 .lastName').val()
			userInfo.phone = $('.stage1 .phone').val()
			userInfo.email = $('.stage1 .email').val()
			userInfo.company = $('.stage1 .company').val()
			userInfo.image = base64Img
			$('.stage2 .firstName .right').text(userInfo.firstName)
			$('.stage2 .lastName .right').text(userInfo.lastName)
			$('.stage2 .phone .right').text(userInfo.phone)
			$('.stage2 .email .right').text(userInfo.email)
			$('.stage2 .company .right').text(userInfo.company)
		} else {
			$('.businessCard img')[0].onload = () => {
				$('.stage1').hide()
				$('.stage2').show()
				userInfo.firstName = $('.stage1 .firstName').val()
				userInfo.lastName = $('.stage1 .lastName').val()
				userInfo.phone = $('.stage1 .phone').val()
				userInfo.email = $('.stage1 .email').val()
				userInfo.company = $('.stage1 .company').val()
				userInfo.image = base64Img
				$('.stage2 .firstName .right').text(userInfo.firstName)
				$('.stage2 .lastName .right').text(userInfo.lastName)
				$('.stage2 .phone .right').text(userInfo.phone)
				$('.stage2 .email .right').text(userInfo.email)
				$('.stage2 .company .right').text(userInfo.company)
			}
		}
	}
	function compress(img) {
		var canvas = document.createElement('canvas')
		var ctx = canvas.getContext('2d')
		var initSize = img.src.length;
		var width = img.width;
		var height = img.height;
		//如果图片大于四百万像素，计算压缩比并将大小压至400万以下
		canvas.width = width;
		canvas.height = height;
		//铺底色
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		//如果图片像素大于100万则使用瓦片绘制
		ctx.drawImage(img, 0, 0, width, height);
		//进行最小压缩
		var ndata = canvas.toDataURL("image/jpeg", 0.1);
		console.log("压缩前：" + initSize);
		console.log("压缩后：" + ndata.length);
		console.log("压缩率：" + parseInt(100 * (initSize - ndata.length) / initSize) + "%");
		return ndata;
	}

	$('.stage2 .submit').on('touchend', () => {
		var reg_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
		if (userInfo.firstName === '') {
			alert('First Name should not be empty')
		} else if (userInfo.lastName === '') {
			alert('Last Name should not be empty')
		} else if (userInfo.email === '') {
			alert('E-mail address can not be empty')
		} else if (userInfo.company === '') {
			alert('Enterprises can not be empty')
		} else if (!reg_email.test(userInfo.email)) {
			alert('Error in mailbox format')
		} else {
			$('.loading').show()
			$.ajax({
				headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token-1"]').attr('content')
                },
				method: 'POST',
				url: 'http://xg.touchworld-sh.com/api/pingAn/user',
				data: {
					username: userInfo.firstName + ' ' + userInfo.lastName,
					company: userInfo.company,
					email: userInfo.email,
					phone: userInfo.phone,
					image: userInfo.image,
					type: '邮件'
				}
			}).done(function (res) {
				if (res) {
					$('.loading').hide()
					$('.stage2').hide()
					$('.stage3').show()
				}
			}).fail(function (res) {
				console.log(res)
            })
		}
	})
	$('.stage2 .return').on('touchend', () => {
		$('.stage2').hide()
		$('.stage1').show()
		$('.updateImg #file').val('')
	})
	$('.stage3 .return').on('touchend', () => {
		// $('.stage3').hide()
		// $('.stage1').show()
		mySwiper.slideTo(0, 0, true)
	})
})