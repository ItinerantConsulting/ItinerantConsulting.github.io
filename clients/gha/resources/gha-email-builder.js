const templateShellBlock0 = `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<!--[if !mso]>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<![endif]-->
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>DISCOVERY</title>
			<link rel="shortcut icon" href="https://www.gha.com/extension/booking_gha/design/gha2015/images/favicon.ico">
			<style type="text/css">
				/* --- Begin Desktop Reset Styles */
				a, a:link {
					color: #000000;
					text-decoration: underline;
				}
				body {
					margin: 0;
					min-width: 100%;
					padding: 0;
					table-layout: fixed;
					width: 100%;
					mso-line-height-rule: exactly;
					-ms-text-size-adjust: 100%;
					-webkit-font-smoothing: antialiased;
					-webkit-text-size-adjust: 100%;
				}
				p {
					margin: 0;
					padding: 0;
				}
				h1, h2, h3, h4, h5, h6 {
					line-height:100%;
				}
				img {
					border: none;
					display: block;
					line-height: 100%;
					outline: none;
					text-decoration: none;
				}
				table td {
					border-spacing: 0;
					border-collapse: collapse;
				}
				#outlook a {
					padding: 0;
				}
				.ReadMsgBody {
					width: 100%;
				}
				.ExternalClass {

				}
				.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
					width: 100%;
					line-height:100%;
				}
				/* End Desktop Reset Styles --- */
				/* --- Begin Editable Desktop Reset Styles */
				a:visited {
					color: #000000;
					text-decoration: none
				}
				a:focus {
					color: #000000;
					text-decoration: underline
				}
				a:hover {
					color: #000000;
					text-decoration: underline
				}
				body, #body-style {
					background-color: #f0f0f0;
					font-family: 'Century Gothic', Arial, sans-serif;
					font-size: 100%;
				}
				span.yshortcuts, span.yshortcuts:hover, span.yshortcuts:active, span.yshortcuts:focus {
					background: transparent;
					border: none;
					color: #000000;
				}
				/* End Editable Desktop Reset Styles --- */
				/* --- Begin Century Gothic Web Font Styles */

					/* Regular */
					@font-face {
						font-family: 'Century Gothic';
						font-style: normal;
						font-weight: 400;
						mso-font-alt: 'Arial';
						src: local('Century Gothic Regular'),
							 local('Century-Gothic-Regularr'),
							 local('CenturyGothic-Regularr'),
							 local('CenturyGothicRegular'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458512/12a5dc1b-8011-4861-8a21-756d2821a8b6.woff') format('woff'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458512/4c97aaa1-f8d3-4460-a769-1d16df90ee1c.ttf') format('truetype');
					}

					/* Regular Italic */
					@font-face {
						font-family: 'Century Gothic';
						font-style: italic;
						font-weight: 400;
						mso-font-alt: 'Arial';
						src: local('Century Gothic Italic'),
							 local('Century-Gothic-Italic'),
							 local('CenturyGothic-Italic'),
							 local('CenturyGothicItalic'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458514/9407422a-3879-4061-bde9-66d86e957b56.woff') format('woff'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458514/dadd5822-b0da-4a45-aaec-d99ca6d35e7b.ttf') format('truetype');
					}

					/* Bold */
					@font-face {
						font-family: 'Century Gothic';
						font-style: normal;
						font-weight: 700;
						mso-font-alt: 'Arial';
						src: local('Century Gothic Bold'),
							 local('Century-Gothic-Bold'),
							 local('CenturyGothic-Bold'),
							 local('CenturyGothicBold'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458516/a3d8ec8e-b555-4d59-a3bb-e91f43163838.woff') format('woff'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458516/44e79fac-8c3e-413f-9157-81933472a440.ttf') format('truetype');
					}

					/* Bold Italic */
					@font-face {
						font-family: 'Century Gothic';
						font-style: italic;
						font-weight: 700;
						mso-font-alt: 'Arial';
						src: local('Century Gothic Bold Italic'),
							 local('Century-Gothic-Bold-Italic'),
							 local('CenturyGothic-BoldItalic'),
							 local('CenturyGothicBoldItalic'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458518/f887a2e7-c903-415e-b2e4-8764080670fa.woff') format('woff'),
							 url('https://www.gha.com/extension/booking_gha/design/gha2015/fonts/1458518/c54bba49-292e-493f-bb6d-272f1d8ce262.ttf') format('truetype');
					}

				/* End Century Gothic Web Font Styles --- */
				/* --- Begin Background Gradient Styles */
					body[id="gha"] .background-image-none {
						background-image: none !important;
					}
					body[id="gha"] .red-level-background-linear-gradient {
						background: rgb(115,11,18); /* For browsers that do not support gradients */
						background: -webkit-linear-gradient(left, rgba(115,11,18,1) 0%, rgba(115,12,19,1) 55%, rgba(116,13,19,1) 56%, rgba(154,97,98,1) 100%); /* For Safari */
						background: -o-linear-gradient(left, rgba(115,11,18,1) 0%, rgba(115,12,19,1) 55%, rgba(116,13,19,1) 56%, rgba(154,97,98,1) 100%); /* For Opera */
						background: -moz-linear-gradient(left, rgba(115,11,18,1) 0%, rgba(115,12,19,1) 55%, rgba(116,13,19,1) 56%, rgba(154,97,98,1) 100%); /* For Firefox */
						background: linear-gradient(left, rgba(115,11,18,1) 0%, rgba(115,12,19,1) 55%, rgba(116,13,19,1) 56%, rgba(154,97,98,1) 100%); /* Standard syntax (must be last) */
					}
					body[id="gha"] .black-level-background-linear-gradient {
						background: rgb(0,0,0); /* For browsers that do not support gradients */
						background: -webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 55%, rgba(2,2,2,1) 56%, rgba(85,88,85,1) 100%); /* For Safari */
						background: -o-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 55%, rgba(2,2,2,1) 56%, rgba(85,88,85,1) 100%); /* For Opera */
						background: -moz-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 55%, rgba(2,2,2,1) 56%, rgba(85,88,85,1) 100%); /* For Firefox */
						background: linear-gradient(left, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 55%, rgba(2,2,2,1) 56%, rgba(85,88,85,1) 100%); /* Standard syntax (must be last) */
					}
					body[id="gha"] .platinum-level-background-linear-gradient {
						background: rgb(200,200,199); /* For browsers that do not support gradients */
						background: -webkit-linear-gradient(left, rgba(200,200,199,1) 0%, rgba(201,201,200,1) 55%, rgba(202,202,201,1) 56%, rgba(242,242,242,1) 100%); /* For Safari */
						background: -o-linear-gradient(left, rgba(200,200,199,1) 0%, rgba(201,201,200,1) 55%, rgba(202,202,201,1) 56%, rgba(242,242,242,1) 100%); /* For Opera */
						background: -moz-linear-gradient(left, rgba(200,200,199,1) 0%, rgba(201,201,200,1) 55%, rgba(202,202,201,1) 56%, rgba(242,242,242,1) 100%); /* For Firefox */
						background: linear-gradient(left, rgba(200,200,199,1) 0%, rgba(201,201,200,1) 55%, rgba(202,202,201,1) 56%, rgba(242,242,242,1) 100%); /* Standard syntax (must be last) */
					}
					body[id="gha"] .gold-level-background-linear-gradient {
						background: rgb(173,154,99); /* For browsers that do not support gradients */
						background: -webkit-linear-gradient(left, rgba(173,154,99,1) 0%, rgba(173,155,101,1) 55%, rgba(174,155,101,1) 56%, rgba(187,179,144,1) 100%); /* For Safari */
						background: -o-linear-gradient(left, rgba(173,154,99,1) 0%, rgba(173,155,101,1) 55%, rgba(174,155,101,1) 56%, rgba(187,179,144,1) 100%); /* For Opera */
						background: -moz-linear-gradient(left, rgba(173,154,99,1) 0%, rgba(173,155,101,1) 55%, rgba(174,155,101,1) 56%, rgba(187,179,144,1) 100%); /* For Firefox */
						background: linear-gradient(left, rgba(173,154,99,1) 0%, rgba(173,155,101,1) 55%, rgba(174,155,101,1) 56%, rgba(187,179,144,1) 100%); /* Standard syntax (must be last) */
					}
				/* End Background Gradient Styles --- */
				/* --- Begin Image Carousel 1 Styles */
				@media screen and (-webkit-min-device-pixel-ratio: 0) {

					/* Hide Fallback content first */
					.fallback {
						display: none;
					}
					.carousel {
						display: block !important;
						max-height: none !important;
						position: relative;
					}

					/*
					Selective blocking for clients.
					- Samsung (#MessageViewBody) - no absolute positioning
					- Comcast/Zimbra (body.MsgBody) - inconsistent CSS support
					*/
					#MessageViewBody .fallback, body.MsgBody .fallback {
						display: block;
					}
					#MessageViewBody .carousel, body.MsgBody .carousel {
						display: none !important;
					}

					.carousel a {
						width: 100%;
						display: block;
					}
					.carousel img {
						display: block !important;
						width: 100% !important;
						height: auto !important;
					}

					/* Fade	*/
					.fade a {
						position: absolute;
						top: 0px;
						left: 0px;
						-webkit-animation: car-anim 9s linear infinite;
					}
					.fade a:nth-child(1) {
						position: relative;
						-webkit-animation-delay: -10s;
					}
					.fade a:nth-child(2) {
						-webkit-animation-delay: -7s;
					}
					.fade a:nth-child(3) {
						-webkit-animation-delay: -4s;
					}

				}
				/* End Image Carousel 1 Styles --- */
				/* --- Begin Image Carousel 2 Styles */
				@media screen and (-webkit-min-device-pixel-ratio: 0) {

					/* Hide Fallback content first */
					.fallback2 {
						display: none;
					}
					.carousel2 {
						display: block !important;
						max-height: none !important;
						position: relative;
					}

					/*
					Selective blocking for clients.
					- Samsung (#MessageViewBody) - no absolute positioning
					- Comcast/Zimbra (body.MsgBody) - inconsistent CSS support
					*/
					#MessageViewBody .fallback2, body.MsgBody .fallback2 {
						display: block;
					}
					#MessageViewBody .carousel2, body.MsgBody .carousel2 {
						display: none !important;
					}

					.carousel2 a {
						width: 100%;
						display: block;
					}
					.carousel2 img {
						display: block !important;
						width: 100% !important;
						height: auto !important;
					}

					/* Fade	*/
					.fade2 a {
						position: absolute;
						top: 0px;
						left: 0px;
						-webkit-animation: car-anim 12s linear infinite;
					}
					.fade2 a:nth-child(1) {
						position: relative;
						-webkit-animation-delay: -13s;
					}
					.fade2 a:nth-child(2) {
						-webkit-animation-delay: -9s;
					}
					.fade2 a:nth-child(3) {
						-webkit-animation-delay: -5s;
					}

				}
				/* End Image Carousel 2 Styles --- */
				/* --- Begin Image Carousel 3 Styles */
				@media screen and (-webkit-min-device-pixel-ratio: 0) {

					/* Hide Fallback content first */
					.fallback3 {
						display: none;
					}
					.carousel3 {
						display: block !important;
						max-height: none !important;
						position: relative;
					}

					/*
					Selective blocking for clients.
					- Samsung (#MessageViewBody) - no absolute positioning
					- Comcast/Zimbra (body.MsgBody) - inconsistent CSS support
					*/
					#MessageViewBody .fallback3, body.MsgBody .fallback3 {
						display: block;
					}
					#MessageViewBody .carousel3, body.MsgBody .carousel3 {
						display: none !important;
					}

					.carousel3 a {
						width: 100%;
						display: block;
					}
					.carousel3 img {
						display: block !important;
						width: 100% !important;
						height: auto !important;
					}

					/* Fade	*/
					.fade3 a {
						position: absolute;
						top: 0px;
						left: 0px;
						-webkit-animation: car-anim 15s linear infinite;
					}
					.fade3 a:nth-child(1) {
						position: relative;
						-webkit-animation-delay: -16s;
					}
					.fade3 a:nth-child(2) {
						-webkit-animation-delay: -11s;
					}
					.fade3 a:nth-child(3) {
						-webkit-animation-delay: -6s;
					}

				}
				/* End Image Carousel 3 Styles --- */
				/* --- Begin Shared Image Carousel Styles */
				@-webkit-keyframes car-anim {

					/* start fade in */
					0% {
						z-index:2;
						opacity:0;
					}
					/* end fade in */
					5% {
						opacity:1;
					}
					33% {
						z-index:2;
					}
					/* lower z-index, allow next image to fade in */
					33.1% {
						z-index:1;
					}
					/* already obscured */
					38% {
						opacity:1;
					}
					/* hide */
					38.1% {
						opacity:0;
					}
					100% {
						z-index:1;
						opacity:0;
					}

				}
				/* End Shared Image Carousel Styles --- */
				/* --- Begin Background Image */
				@media screen and (-webkit-min-device-pixel-ratio: 0) {

					/* Hide Fallback content first */
					.fallback4 {
						display: none;
					}
					.background-image {
						display: block !important;
						max-height: none !important;
						position: relative;
					}

					/*
					Selective blocking for clients.
					- Samsung (#MessageViewBody) - no absolute positioning
					- Comcast/Zimbra (body.MsgBody) - inconsistent CSS support
					*/
					#MessageViewBody .fallback4, body.MsgBody .fallback4 {
						display: block;
					}
					#MessageViewBody .background-image, body.MsgBody .background-image {
						display: none !important;
					}

					/* Background Image */
					.background-image {
						background: url('http://via.placeholder.com/1000x600') !important;
						background-size: 450px auto !important;
						background-repeat: no-repeat !important;
						background-position: top left !important;
					}

				}
				@media screen and (max-width: 480px) {

					/* Background Image */
					.background-image {
						background-size: 70% auto !important;
					}

				}
				/* End Background Image --- */
				/* --- Begin Responsive Styles */
				@media screen and (max-width: 600px) {
					body[id="gha"] .border-none {
						border: none !important;
					}
					body[id="gha"] .display-block {
						display: block !important;
					}
					body[id="gha"] .display-none {
						display: none !important;
					}
				}
				/* End Responsive Styles --- */

				/* ----------- iPhone 4 and 4S ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 480px)
						and (-webkit-min-device-pixel-ratio: 2) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 480px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: portrait) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 480px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: landscape) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

				/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 568px)
						and (-webkit-min-device-pixel-ratio: 2) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 568px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: portrait) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 320px)
						and (max-device-width: 568px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: landscape) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

				/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 667px)
						and (-webkit-min-device-pixel-ratio: 2) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 667px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: portrait) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 667px)
						and (-webkit-min-device-pixel-ratio: 2)
						and (orientation: landscape) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

				/* ----------- iPhone 6+, 7+ and 8+ ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 414px)
						and (max-device-width: 736px)
						and (-webkit-min-device-pixel-ratio: 3) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 414px)
						and (max-device-width: 736px)
						and (-webkit-min-device-pixel-ratio: 3)
						and (orientation: portrait) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 414px)
						and (max-device-width: 736px)
						and (-webkit-min-device-pixel-ratio: 3)
						and (orientation: landscape) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

				/* ----------- iPhone X ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 812px)
						and (-webkit-min-device-pixel-ratio: 3) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 812px)
						and (-webkit-min-device-pixel-ratio: 3)
						and (orientation: portrait) {
						body[id="gha"] .display-none-apple-devices {
							display: none !important;
						}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 375px)
						and (max-device-width: 812px)
						and (-webkit-min-device-pixel-ratio: 3)
						and (orientation: landscape) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

				/* ----------- iPad 1, 2, Mini and Air ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (-webkit-min-device-pixel-ratio: 1) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (orientation: portrait)
						and (-webkit-min-device-pixel-ratio: 1) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (orientation: landscape)
						and (-webkit-min-device-pixel-ratio: 1) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

				/* ----------- iPad 3, 4 and Pro 9.7" ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Portrait */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (orientation: portrait)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Landscape */
					@media only screen
						and (min-device-width: 768px)
						and (max-device-width: 1024px)
						and (orientation: landscape)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

				/* ----------- iPad Pro 10.5" ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 834px)
						and (max-device-width: 1112px)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Portrait */
					/* Declare the same value for min- and max-width to avoid colliding with desktops */
					/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
					@media only screen
						and (min-device-width: 834px)
						and (max-device-width: 834px)
						and (orientation: portrait)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Landscape */
					/* Declare the same value for min- and max-width to avoid colliding with desktops */
					/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
					@media only screen
						and (min-device-width: 1112px)
						and (max-device-width: 1112px)
						and (orientation: landscape)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

				/* ----------- iPad Pro 12.9" ----------- */

					/* Portrait and Landscape */
					@media only screen
						and (min-device-width: 1024px)
						and (max-device-width: 1366px)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Portrait */
					/* Declare the same value for min- and max-width to avoid colliding with desktops */
					/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
					@media only screen
						and (min-device-width: 1024px)
						and (max-device-width: 1024px)
						and (orientation: portrait)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

					/* Landscape */
					/* Declare the same value for min- and max-width to avoid colliding with desktops */
					/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
					@media only screen
						and (min-device-width: 1366px)
						and (max-device-width: 1366px)
						and (orientation: landscape)
						and (-webkit-min-device-pixel-ratio: 2) {
							body[id="gha"] .display-none-apple-devices {
								display: none !important;
							}
					}

			</style>
			<!--[if (gte mso 9)|(IE)]>
			<style type="text/css">
				table {
					border-collapse: collapse !important;
				}
			</style>
			<![endif]-->
		</head>



		<!-- ||| Begin BODY tag -->
		<body id="gha" style="background-color: #f0f0f0; font-family: 'Century Gothic', Arial, sans-serif; font-size: 100%; font-weight: 400; margin: 0; min-width: 100%; padding: 0; table-layout: fixed; width: 100%; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%;">

		<!-- ||| Begin CENTER tag -->
		<center>



		<!-- ||| Begin Email Container Table -->
		<table bgcolor="#f0f0f0" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f0f0; border-spacing: 0; width: 100%;">
			<tr>
				<td width="100%" style="width: 100%;">



		<!-- ||| Begin Email Wrapper Div -->
		<div style="margin: 0 auto; max-width: 700px;">



		<!-- *** Begin MSO Email Container Table -->
		<!--[if (gte mso 9)|(IE)]>
		<table align="center" border="0" cellpadding="0" cellspacing="0" width="700">
			<tr>
				<td valign="top" width="100%">
		<![endif]-->
`;
const templateShellBlock1 = `
	<!-- /// Begin Email Body Table -->
	<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; max-width: 700px; width: 100%;">
		<tr>
			<td>
`;
const templateShellBlock2 = `
			</td>
		</tr>
	</table>
	<!-- End Email Body Table \\\ -->
`;
const templateShellBlock3 = `
		<!--[if (gte mso 9)|(IE)]>
				</td>
			</tr>
		</table>
		<![endif]-->
		<!-- End MSO Email Container Table *** -->



		</div>
		<!-- End Email Wrapper Div ||| -->



				</td>
			</tr>
		</table>
		<!-- End Email Container Table ||| -->



		</center>
		<!-- End CENTER tag ||| -->

		</body>
		<!-- End BODY tag ||| -->
	</html>
`;