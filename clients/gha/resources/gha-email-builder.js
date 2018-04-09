/* #############################################
# Calculate current year and write to template #
############################################# */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // January is 0
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0'+dd;
} 

if (mm < 10) {
    mm = '0'+mm;
} 

today = yyyy + '-' + mm + '-' + dd;




/* #####################################
# Static blocks of email template HTML #
##################################### */
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
	<!-- ||| Begin Email Body Table -->
	<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; max-width: 700px; width: 100%;">
		<tr>
			<td>
`;
const templateShellBlock2 = `
			</td>
		</tr>
	</table>
	<!-- End Email Body Table ||| -->
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


/* ###############################
# Blank <div> for "none" options #
################################ */
var none = `
	<div id="none" style="display: none;"></div>
`;


/* #############################
# Email preheader HTML modules #
############################# */
var snippetTextAndViewOnlineLink = `
	<!-- ||| Begin Email Preheader Table -->
	<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 8px; padding-left: 4px; padding-right: 4px; padding-top: 8px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="color: #888888; font-family: 'Century Gothic', Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left; vertical-align: top;">
							<span id="snippet_text" class="display-block" style="display: inline-block; white-space: nowrap;">
								{snippet_text}
						</td>
						<td align="right" valign="top" style="color: #888888; font-family: 'Century Gothic', Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: right; vertical-align: top;">
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								Is this email not displaying correctly?
							</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="View in browser" style="color: #888888; text-decoration: underline;">
									View in browser
								</a>
							</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Email Preheader Table ||| -->
`;
var snippetTextOnly = `
	<!-- ||| Begin Email Preheader Table -->
	<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 8px; padding-left: 4px; padding-right: 4px; padding-top: 8px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="color: #888888; font-family: 'Century Gothic', Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left; vertical-align: top;">
							<span id="snippet_text" class="display-block" style="display: inline-block; white-space: nowrap;">
								{snippet_text}
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Email Preheader Table ||| -->
`;
var viewOnlineLinkOnly = `
	<!-- ||| Begin Email Preheader Table -->
	<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 8px; padding-left: 4px; padding-right: 4px; padding-top: 8px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="right" valign="top" style="color: #888888; font-family: 'Century Gothic', Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: right; vertical-align: top;">
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								Is this email not displaying correctly?
							</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="View in browser" style="color: #888888; text-decoration: underline;">
									View in browser
								</a>
							</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Email Preheader Table ||| -->
`;


/* ##########################
# Email header HTML modules #
########################## */
var defaultHeader = `
	<!-- ||| Begin Header Module -->
	<table bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 25px; padding-left: 25px; padding-right: 25px; padding-top: 25px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="155" style="text-align: left; vertical-align: middle; width: 155px;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="middle" width="140" style="text-align: left; padding-right: 15px; vertical-align: middle; width: 140px;">
										<a href="#" target="_blank" title="DISCOVERY" style="text-decoration: none;">
											<img src="http://static.cdn.responsys.net/i2/responsysimages/dscvry/contentlibrary/gha_limited_time_offers/title_images/discovery-logo-315x40-01.png" alt="DISCOVERY" width="140" style="border: none; color: #ffffff; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 140px; text-align: left; text-decoration: none; vertical-align: middle; width: 100%;" />
										</a>
									</td>
								</tr>
							</table>
						</td>
						<!--[if (gte mso 9)|(IE)]>
						<td align="left" valign="middle" width="495">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
						<![endif]-->
						<td id="campaign_name" align="left" valign="middle" width="auto" style="border-left: 1px solid #99a49c; color: #ae9a64; font-family: 'Century Gothic', Arial, sans-serif; font-size: 20px; font-style: normal; font-weight: 400; line-height: 25px; padding-left: 15px; text-align: left; vertical-align: middle; width: auto;">
							{campaign_name}
						</td>
						<!--[if (gte mso 9)|(IE)]>
								</tr>
							</table>
						</td>
						<![endif]-->
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Header Module ||| -->
`;


/* ######################
# Tier bar HTML modules #
###################### */
var basicAccountDetails = `
	<!-- ###############################
	<#if API_MEMBERSHIP_LEVEL == 'GOLD'>
	################################ -->

	<!-- ||| Begin Module: Account Details - Gold Level Members -->
	<table bgcolor="#ad9a63" border="0" cellpadding="0" cellspacing="0" width="100%" class="gold-level-background-linear-gradient" style="background-color: #ad9a63; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 15px; text-align: left; vertical-align: middle; width: auto;">
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								F_NAME
							</span>
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								L_NAME
							</span>
							<span class="display-none">&#160;&#160;</span>
							<span class="display-block" style="display: inline-block;">
								<a href="#" target="_blank" title="#123456789" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
							</span>
							<br class="display-none" />
							<span style="display: inline-block; white-space: nowrap;">
								GOLD LEVEL
							</span>
							<span class="display-none">&#160;&#160;|&#160;&#160;</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="MEMBERSHIP BENEFITS" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">MEMBERSHIP BENEFITS</a>
							</span>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Gold Level Members ||| -->

	<!-- #######################################
	<#elseif API_MEMBERSHIP_LEVEL == 'PLATINUM'>
	######################################## -->

	<!-- ||| Begin Module: Account Details - Platinum Level Members -->
	<table bgcolor="#c8c8c7" border="0" cellpadding="0" cellspacing="0" width="100%" class="platinum-level-background-linear-gradient" style="background-color: #c8c8c7; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 15px; text-align: left; vertical-align: middle; width: auto;">
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								F_NAME
							</span>
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								L_NAME
							</span>
							<span class="display-none">&#160;&#160;</span>
							<span class="display-block" style="display: inline-block;">
								<a href="#" target="_blank" title="#123456789" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
							</span>
							<br class="display-none" />
							<span style="display: inline-block; white-space: nowrap;">
								PLATINUM LEVEL
							</span>
							<span class="display-none">&#160;&#160;|&#160;&#160;</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="MEMBERSHIP BENEFITS" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">MEMBERSHIP BENEFITS</a>
							</span>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Platinum Level Members ||| -->

	<!-- ####################################
	<#elseif API_MEMBERSHIP_LEVEL == 'BLACK'>
	##################################### -->

	<!-- ||| Begin Module: Account Details - Black Level Members -->
	<table bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" width="100%" class="black-level-background-linear-gradient" style="background-color: #000000; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 15px; text-align: left; vertical-align: middle; width: auto;">
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								F_NAME
							</span>
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								L_NAME
							</span>
							<span class="display-none">&#160;&#160;</span>
							<span class="display-block" style="display: inline-block;">
								<a href="#" target="_blank" title="#123456789" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
							</span>
							<br class="display-none" />
							<span style="display: inline-block; white-space: nowrap;">
								BLACK LEVEL
							</span>
							<span class="display-none">&#160;&#160;|&#160;&#160;</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="MEMBERSHIP BENEFITS" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">MEMBERSHIP BENEFITS</a>
							</span>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Black Level Members ||| -->

	<!-- ##################################
	<#elseif API_MEMBERSHIP_LEVEL == 'RED'>
	################################### -->

	<!-- ||| Begin Module: Account Details - Red Level Members -->
	<table bgcolor="#730b12" border="0" cellpadding="0" cellspacing="0" width="100%" class="red-level-background-linear-gradient" style="background-color: #730b12; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 15px; text-align: left; vertical-align: middle; width: auto;">
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								F_NAME
							</span>
							<span style="display: inline-block; font-size: 14px; font-weight: 700; text-transform: uppercase; white-space: nowrap;">
								L_NAME
							</span>
							<span class="display-none">&#160;&#160;</span>
							<span class="display-block" style="display: inline-block;">
								<a href="#" target="_blank" title="#123456789" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
							</span>
							<br class="display-none" />
							<span style="display: inline-block; white-space: nowrap;">
								RED LEVEL
							</span>
							<span class="display-none">&#160;&#160;|&#160;&#160;</span>
							<span class="display-block" style="display: inline-block; white-space: nowrap;">
								<a href="#" target="_blank" title="MEMBERSHIP BENEFITS" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">MEMBERSHIP BENEFITS</a>
							</span>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Red Level Members ||| -->

	<!-- #
		</#if>
	## -->
`;
var fullAccountDetails = `
	<!-- ###############################
	<#if API_MEMBERSHIP_LEVEL == 'GOLD'>
	################################ -->

	<!-- ||| Begin Module: Account Details - Gold Level Members -->
	<table bgcolor="#ad9a63" border="0" cellpadding="0" cellspacing="0" width="100%" class="gold-level-background-linear-gradient" style="background-color: #ad9a63; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<!-- FIRST NAME LAST NAME / LEVEL / MEMBER NUMBER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="text-align: left; vertical-align: middle; width: auto;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: left; text-transform: uppercase; vertical-align: middle; white-space: nowrap; width: auto;">
										<span style="display: inline-block;">
											F_NAME
										</span>
										<span style="display: inline-block;">
											L_NAME
										</span>
									</td>
								</tr>
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: middle; white-space: nowrap; width: auto;">
										<span class="display-block" style="display: inline-block;">
											RED LEVEL
										</span>
										<span class="display-none">&#160;&#160;|&#160;&#160;</span>
										<span class="display-block" style="display: inline-block;">
											<a href="#" target="_blank" title="#123456789" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
										</span>
									</td>
								</tr>
							</table>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
				<!-- DIVIDER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="center" height="20" valign="middle" style="border-bottom-color: #000000; border-bottom-style: solid; border-bottom-width: 1px; font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
					<tr>
						<td align="center" height="20" valign="middle" style="font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
				</table>
				<!-- ELIGIBLE NIGHTS / BRANDS STAYED / GO TO MY ACCOUNT / PLATINUM LEs Available -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="font-size: 0; text-align: left; vertical-align: top;">
						<!--[if (gte mso 9)|(IE)]>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; font-family: Arial, sans-serif; width: 100%;" >
							<tr>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td class="currentYear" align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										yyyy ELIGIBLE NIGHTS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										DISCOVERY BRANDS STAYED: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="GO TO MY ACCOUNT" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">GO TO MY ACCOUNT</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										PLATINUM LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										BLACK LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="LEARN MORE" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">LEARN MORE</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							</tr>
						</table>
						<![endif]-->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Gold Level Members ||| -->

	<!-- #######################################
	<#elseif API_MEMBERSHIP_LEVEL == 'PLATINUM'>
	######################################## -->

	<!-- ||| Begin Module: Account Details - Platinum Level Members -->
	<table bgcolor="#c8c8c7" border="0" cellpadding="0" cellspacing="0" width="100%" class="platinum-level-background-linear-gradient" style="background-color: #c8c8c7; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<!-- FIRST NAME LAST NAME / LEVEL / MEMBER NUMBER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="text-align: left; vertical-align: middle; width: auto;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: left; text-transform: uppercase; vertical-align: middle; white-space: nowrap; width: auto;">
										<span style="display: inline-block;">
											F_NAME
										</span>
										<span style="display: inline-block;">
											L_NAME
										</span>
									</td>
								</tr>
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: middle; white-space: nowrap; width: auto;">
										<span class="display-block" style="display: inline-block;">
											RED LEVEL
										</span>
										<span class="display-none">&#160;&#160;|&#160;&#160;</span>
										<span class="display-block" style="display: inline-block;">
											<a href="#" target="_blank" title="#123456789" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
										</span>
									</td>
								</tr>
							</table>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
				<!-- DIVIDER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="center" height="20" valign="middle" style="border-bottom-color: #000000; border-bottom-style: solid; border-bottom-width: 1px; font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
					<tr>
						<td align="center" height="20" valign="middle" style="font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
				</table>
				<!-- ELIGIBLE NIGHTS / BRANDS STAYED / GO TO MY ACCOUNT / PLATINUM LEs Available -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="font-size: 0; text-align: left; vertical-align: top;">
						<!--[if (gte mso 9)|(IE)]>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; font-family: Arial, sans-serif; width: 100%;" >
							<tr>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td class="currentYear" align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										yyyy ELIGIBLE NIGHTS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										DISCOVERY BRANDS STAYED: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="GO TO MY ACCOUNT" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">GO TO MY ACCOUNT</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										PLATINUM LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										BLACK LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="LEARN MORE" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">LEARN MORE</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							</tr>
						</table>
						<![endif]-->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Platinum Level Members ||| -->

	<!-- ####################################
	<#elseif API_MEMBERSHIP_LEVEL == 'BLACK'>
	##################################### -->

	<!-- ||| Begin Module: Account Details - Black Level Members -->
	<table bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" width="100%" class="black-level-background-linear-gradient" style="background-color: #000000; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<!-- FIRST NAME LAST NAME / LEVEL / MEMBER NUMBER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="text-align: left; vertical-align: middle; width: auto;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: left; text-transform: uppercase; vertical-align: middle; white-space: nowrap; width: auto;">
										<span style="display: inline-block;">
											F_NAME
										</span>
										<span style="display: inline-block;">
											L_NAME
										</span>
									</td>
								</tr>
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: middle; white-space: nowrap; width: auto;">
										<span class="display-block" style="display: inline-block;">
											RED LEVEL
										</span>
										<span class="display-none">&#160;&#160;|&#160;&#160;</span>
										<span class="display-block" style="display: inline-block;">
											<a href="#" target="_blank" title="#123456789" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
										</span>
									</td>
								</tr>
							</table>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
				<!-- DIVIDER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="center" height="20" valign="middle" style="border-bottom-color: #ffffff; border-bottom-style: solid; border-bottom-width: 1px; font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
					<tr>
						<td align="center" height="20" valign="middle" style="font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
				</table>
				<!-- ELIGIBLE NIGHTS / BRANDS STAYED / GO TO MY ACCOUNT / PLATINUM LEs Available -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="font-size: 0; text-align: left; vertical-align: top;">
						<!--[if (gte mso 9)|(IE)]>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; font-family: Arial, sans-serif; width: 100%;" >
							<tr>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td class="currentYear" align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										yyyy ELIGIBLE NIGHTS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										DISCOVERY BRANDS STAYED: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="GO TO MY ACCOUNT" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">GO TO MY ACCOUNT</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										PLATINUM LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										BLACK LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="LEARN MORE" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">LEARN MORE</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							</tr>
						</table>
						<![endif]-->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Black Level Members ||| -->

	<!-- ##################################
	<#elseif API_MEMBERSHIP_LEVEL == 'RED'>
	################################### -->

	<!-- ||| Begin Module: Account Details - Red Level Members -->
	<table bgcolor="#730b12" border="0" cellpadding="0" cellspacing="0" width="100%" class="red-level-background-linear-gradient" style="background-color: #730b12; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 15px; padding-left: 25px; padding-right: 25px; padding-top: 15px;">
				<!-- FIRST NAME LAST NAME / LEVEL / MEMBER NUMBER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="middle" width="auto" style="text-align: left; vertical-align: middle; width: auto;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: left; text-transform: uppercase; vertical-align: middle; white-space: nowrap; width: auto;">
										<span style="display: inline-block;">
											F_NAME
										</span>
										<span style="display: inline-block;">
											L_NAME
										</span>
									</td>
								</tr>
								<tr>
									<td align="left" valign="middle" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: middle; white-space: nowrap; width: auto;">
										<span class="display-block" style="display: inline-block;">
											RED LEVEL
										</span>
										<span class="display-none">&#160;&#160;|&#160;&#160;</span>
										<span class="display-block" style="display: inline-block;">
											<a href="#" target="_blank" title="#123456789" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">#123456789</a>
										</span>
									</td>
								</tr>
							</table>
						</td>
						<td align="right" valign="middle" width="125" style="text-align: right; margin-left: auto; margin-right: 0; vertical-align: middle; width: 125px;">
							<img src="http://via.placeholder.com/300x100" width="150" style="border: none; display: block; margin-left: auto; margin-right: 0; max-width: 150px; text-align: right; vertical-align: middle; width: 100%;" />
						</td>
					</tr>
				</table>
				<!-- DIVIDER -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="center" height="20" valign="middle" style="border-bottom-color: #ffffff; border-bottom-style: solid; border-bottom-width: 1px; font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
					<tr>
						<td align="center" height="20" valign="middle" style="font-size: 20px; line-height: 20px; text-align: center; vertical-align: middle;">
							&nbsp;
						</td>
					</tr>
				</table>
				<!-- ELIGIBLE NIGHTS / BRANDS STAYED / GO TO MY ACCOUNT / PLATINUM LEs Available -->
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="font-size: 0; text-align: left; vertical-align: top;">
						<!--[if (gte mso 9)|(IE)]>
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; font-family: Arial, sans-serif; width: 100%;" >
							<tr>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td class="currentYear" align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										yyyy ELIGIBLE NIGHTS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										DISCOVERY BRANDS STAYED: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="GO TO MY ACCOUNT" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">GO TO MY ACCOUNT</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
						<![endif]-->
						<div valign="top" style="display: inline-block; max-width: 325px; width: 100%; vertical-align: top;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										PLATINUM LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										BLACK LOCAL EXPERIENCE AWARDS: ##
									</td>
								</tr>
								<tr>
									<td align="left" valign="top" width="10" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: 10px;">&gt;</td>
									<td align="left" valign="top" width="auto" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: left; vertical-align: top; width: auto;">
										<a href="#" target="_blank" title="LEARN MORE" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: underline;">LEARN MORE</a>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]>
							</td>
							</tr>
						</table>
						<![endif]-->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Module: Account Details - Red Level Members ||| -->

	<!-- #
		</#if>
	## -->
`;

/* ########################
# Email hero HTML modules #
######################## */
var oneColumnHeroImage = `
	<!-- ||| Begin One (1/1) Column Hero Image v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td align="left" valign="top" style="text-align: left; vertical-align: top;">
				<img id="hero_image" src="http://via.placeholder.com/1400x700/808000/ffffff#{hero_image}" alt="" width="700" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 700px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
		</tr>
	</table>
	<!-- End One (1/1) Column Hero Image v1.0.0 ||| -->
`;

var oneHalfColumnHeroImageOneHalfColumnHeroImageNoWrap = `
	<!-- ||| Begin One-half (1/2) Column Hero Image | One-half (1/2) Column Hero Image (No Wrap) v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td align="left" valign="top" width="50%" style="text-align: left; vertical-align: top; width: 50%;">
				<img id="hero_image_1" src="http://via.placeholder.com/700x700/800080/ffffff#{hero_image_1}" alt="" width="350" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 350px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
			<td align="left" valign="top" width="50%" style="text-align: left; vertical-align: top; width: 50%;">
				<img id="hero_image_2" src="http://via.placeholder.com/700x700/008080/ffffff#{hero_image_2}" alt="" width="350" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 350px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
		</tr>
	</table>
	<!-- End One-half (1/2) Column Hero Image | One-half (1/2) Column Hero Image (No Wrap) v1.0.0 ||| -->
`;

var oneHalfColumnHeroImageOneHalfColumnHeroImageYesWrap = `
	<!-- ||| Begin One-half (1/2) Column Hero Image | One-half (1/2) Column Hero Image (Yes Wrap) v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td align="center" valign="top" style="font-size: 0; text-align: center; vertical-align: top;">
			<!--[if (gte mso 9)|(IE)]>
			<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; font-family: Arial, sans-serif; width: 100%;" >
				<tr>
				<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
			<![endif]-->
			<div valign="top" style="display: inline-block; max-width: 350px; width: 100%; vertical-align: top;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="text-align: left; vertical-align: top;">
							<img id="hero_image_1" src="http://via.placeholder.com/700x700/87CEFA/ffffff#{hero_image_1}" alt="" width="350" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 350px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
						</td>
					</tr>
				</table>
			</div>
			<!--[if (gte mso 9)|(IE)]>
				</td>
				<td valign="top" width="50%" style="vertical-align: top; width: 50%;">
			<![endif]-->
			<div valign="top" style="display: inline-block; max-width: 350px; width: 100%; vertical-align: top;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" valign="top" style="text-align: left; vertical-align: top;">
							<img id="hero_image_2" src="http://via.placeholder.com/700x700/F4A460/ffffff#{hero_image_2}" alt="" width="350" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 350px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
						</td>
					</tr>
				</table>
			</div>
			<!--[if (gte mso 9)|(IE)]>
				</td>
				</tr>
			</table>
			<![endif]-->
			</td>
		</tr>
	</table>
	<!-- End One-half (1/2) Column Hero Image | One-half (1/2) Column Hero Image (Yes Wrap) v1.0.0 ||| -->
`;

var oneColumnTwoRowHeroImage = `
	<!-- ||| Begin One (1/1) Column / Two (2/1) Row Hero Image v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td align="left" valign="top" style="text-align: left; vertical-align: top;">
				<img id="hero_image_1" src="http://via.placeholder.com/1400x350/DEB887/ffffff#{hero_image_1}" alt="" width="700" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 700px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
		</tr>
		<tr>
			<td align="left" valign="top" style="text-align: left; vertical-align: top;">
				<img id="hero_image_2" src="http://via.placeholder.com/1400x350/D2691E/ffffff#{hero_image_2}" alt="" width="700" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 700px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
		</tr>
	</table>
	<!-- End One (1/1) Column / Two (2/1) Row Hero Image v1.0.0 ||| -->
`;

var oneHalfColumnHeroImageOneHalfeColumnHeadlineCopyCtaNoWrap = `
	<!-- ||| Begin One-half (1/2) Column Hero Image | One-half (1/2) Column Headline / Copy / CTA (No Wrap) v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td align="left" valign="middle" width="50%" style="text-align: left; vertical-align: middle; width: 50%;">
				<img id="hero_image" src="http://via.placeholder.com/700x700/00FF7F/ffffff#{hero_image}" alt="" width="350" style="border: none; color: #483b05; display: block; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-weight: 400; max-width: 350px; text-align: left; text-decoration: none; vertical-align: top; width: 100%;" />
			</td>
			<td align="left" valign="middle" width="50%" style="text-align: left; vertical-align: middle; width: 50%;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td width="auto" style="padding-bottom: 20px; padding-left: 20px; padding-right: 20px; padding-top: 20px;width: auto;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td id="hero_headline_text" align="left" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 28px; font-style: normal; font-weight: 400; line-height: 36px; text-align: left; width: auto;">
										{hero_headline_text}
									</td>
								</tr>
								<tr>
									<td id="hero_article_text" align="left" width="auto" style="color: #4c524e; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; line-height: 28px; padding-top: 10px; text-align: left; width: auto;">
										{hero_article_text}
									</td>
								</tr>
							</table>
							<!-- ### Begin Button Block -->
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" width="auto" style="padding-top: 20px; text-align: left; width: auto;">
										<table id="heroTableWidth" border="0" cellpadding="0" cellspacing="0" width="200" style="border-spacing: 0; width: 200px;">
											<tr>
												<td id="heroTdWidth" bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 20px; padding-top: 15px; text-align: left; width: 120px;">
													<a id="hero_cta" href="#" target="_blank" title="" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">
														{hero_cta}
													</a>
												</td>
												<td bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 15px; padding-right: 15px; padding-top: 15px; text-align: center; width: 10px;">
													&gt;
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<!-- End Button Block ### -->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End One-half (1/2) Column Hero Image | One-half (1/2) Column Headline / Copy / CTA (No Wrap) v1.0.0 ||| -->
`;

/* ########################
# Email body HTML modules #
######################## */
var oneColumnCopyWhiteBG = `
	<!-- ||| Begin One (1/1) Column Copy (White Background) v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-left: 25px; padding-right: 25px;">
				<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
					<tr>
						<td style="padding-bottom: 35px; padding-left: 55px; padding-right: 55px; padding-top: 35px;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" width="auto" style="text-align: left; width: auto;">
										<table border="0" cellpadding="0" cellspacing="0" width="30px" style="border-spacing: 0; width: 30px;">
											<tr>
												<td bgcolor="ad9a63" height="1" width="30" style="background-color: #ad9a63; font-size: 1px; height: 5px; min-height: 5px; max-height: 5px; line-height: 5px; width: 30px;">
													&nbsp;
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td id="headline_text" align="left" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 28px; font-style: normal; font-weight: 400; line-height: 36px; padding-top: 20px; text-align: left; width: auto;">
										{headline_text}
									</td>
								</tr>
								<tr>
									<td id="article_text" align="left" width="auto" style="color: #4c524e; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; line-height: 28px; padding-top: 10px; text-align: left; width: auto;">
										{article_text}
									</td>
								</tr>
							</table>
							<!-- ### Begin Button Block -->
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" width="auto" style="padding-top: 20px; text-align: left; width: auto;">
										<table id="tableWidth" border="0" cellpadding="0" cellspacing="0" width="200" style="border-spacing: 0; width: 200px;">
											<tr>
												<td id="tdWidth" bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 20px; padding-top: 15px; text-align: left; width: 120px;">
													<a id="cta" href="#" target="_blank" title="" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">
														{cta}
													</a>
												</td>
												<td bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 15px; padding-right: 15px; padding-top: 15px; text-align: center; width: 10px;">
													&gt;
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<!-- End Button Block ### -->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End One (1/1) Column Copy (White Background) v1.0.0 ||| -->
`;
var oneColumnCopyGrayBG = `
	<!-- ||| Begin One (1/1) Column Copy (Gray Background) v1.0.0 -->
	<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-left: 25px; padding-right: 25px;">
				<table bgcolor="#ced5ce" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ced5ce; border-spacing: 0; width: 100%;">
					<tr>
						<td style="padding-bottom: 35px; padding-left: 55px; padding-right: 55px; padding-top: 35px;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" width="auto" style="text-align: left; width: auto;">
										<table border="0" cellpadding="0" cellspacing="0" width="30px" style="border-spacing: 0; width: 30px;">
											<tr>
												<td bgcolor="ad9a63" height="1" width="30" style="background-color: #ad9a63; font-size: 1px; height: 5px; min-height: 5px; max-height: 5px; line-height: 5px; width: 30px;">
													&nbsp;
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td id="headline_text" align="left" width="auto" style="color: #000000; font-family: 'Century Gothic', Arial, sans-serif; font-size: 28px; font-style: normal; font-weight: 400; line-height: 36px; padding-top: 20px; text-align: left; width: auto;">
										{headline_text}
									</td>
								</tr>
								<tr>
									<td id="article_text" align="left" width="auto" style="color: #4c524e; font-family: 'Century Gothic', Arial, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; line-height: 28px; padding-top: 10px; text-align: left; width: auto;">
										{article_text}
									</td>
								</tr>
							</table>
							<!-- ### Begin Button Block -->
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
								<tr>
									<td align="left" width="auto" style="padding-top: 20px; text-align: left; width: auto;">
										<table id="tableWidth" border="0" cellpadding="0" cellspacing="0" width="200" style="border-spacing: 0; width: 200px;">
											<tr>
												<td id="tdWidth" bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 20px; padding-top: 15px; text-align: left; width: 120px;">
													<a id="cta" href="#" target="_blank" title="" style="color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; text-decoration: none;">
														{cta}
													</a>
												</td>
												<td bgcolor="#ae9a64" style="background: #ae9a64; color: #ffffff; font-family: 'Century Gothic', Arial, sans-serif; font-size: 15px; font-weight: 700; line-height: 20px; padding-bottom: 15px; padding-left: 15px; padding-right: 15px; padding-top: 15px; text-align: center; width: 10px;">
													&gt;
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<!-- End Button Block ### -->
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End One (1/1) Column Copy (Gray Background) v1.0.0 ||| -->
`;


/* ##########################
# Email footer HTML modules #
########################## */

var footerDefault = `
	<!-- ||| Begin Email Footer Table -->
	<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
		<tr>
			<td style="padding-bottom: 8px; padding-left: 4px; padding-right: 4px; padding-top: 8px;">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0; width: 100%;">
					<tr>
						<td align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left;">
							GHA Loyalty DMCC
						</td>
					</tr>
					<tr>
						<td align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left;">
							21st Floor, Jumeirah Business Center 5 Tower
						</td>
					</tr>
					<tr>
						<td align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left;">
							PO Box 487771
						</td>
					</tr>
					<tr>
						<td align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; padding-bottom: 12px; text-align: left;">
							Dubai, UAE
						</td>
					</tr>
					<tr>
						<td class="currentYear" align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left;">
							&copy; yyyy Global Hotel Alliance. All Rights Reserved.
						</td>
					</tr>
					<tr>
						<td align="left" class="text-align-center" style="color: #888888; font-family: 'Century Gothic', Arial, Helvetica, sans-serif; font-size: 10px; font-weight: 400; line-height: normal; text-align: left;">
							DISCOVERY's
							<a href="#" target="_blank" title="" style="color: #888888; text-decoration: underline;">privacy policy</a>.
							<a href="#" target="_blank" title="" style="color: #888888; text-decoration: underline;">Unsubscribe</a>.
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- End Email Footer Table ||| -->
`;


/* #######################################
# Change size of #template-preview <div> #
####################################### */

function desktopDevice() {
	document.getElementById("template-preview").classList.add('desktop-device-preview');
	document.getElementById("template-preview").classList.remove('full-screen-preview');
	document.getElementById("template-preview").classList.remove('tablet-device-preview');
	document.getElementById("template-preview").classList.remove('mobile-device-preview');
}
function tabletDevice() {
	document.getElementById("template-preview").classList.add('tablet-device-preview');
	document.getElementById("template-preview").classList.remove('full-screen-preview');
	document.getElementById("template-preview").classList.remove('desktop-device-preview');
	document.getElementById("template-preview").classList.remove('mobile-device-preview');
}
function mobileDevice() {
	document.getElementById("template-preview").classList.add('mobile-device-preview');
	document.getElementById("template-preview").classList.remove('full-screen-preview');
	document.getElementById("template-preview").classList.remove('desktop-device-preview');
	document.getElementById("template-preview").classList.remove('tablet-device-preview');
}


/* #######################
# Download Compiled HTML #
####################### */

// Create a function that 1) defines a file name, and 2) returns a block of HTML to be downloaded
function downloadInnerHtml() {
	// Find the first <input> element using the getElementsByTagName() method, return the content using the value propery, and assign to the fileName variable
	var fileName = document.getElementById('file-name').value;

	// Concatenate the user selected blocks of HTML with the static blocks of HTML (defined as string literals in gha-email-builder.js) to create a full template
	var emailTemplate = templateShellBlock0 + emailPreheaderInput.innerHTML + templateShellBlock1 + emailHeaderInput.innerHTML + emailTierBarInput.innerHTML + emailHeroInput.innerHTML + emailBodyInput.innerHTML + templateShellBlock2 + emailFooterInput.innerHTML + templateShellBlock3;

	// Create a new <a> tag using the createElement() method and assign to downloadLink variable
	var downloadLink = document.createElement('a');
	
	// Set the download attribute of the link so that it uses the user defined name
	downloadLink.setAttribute('download', fileName);
	
	// Set the href attribute of the link
	// The data URI scheme is a Uniform Resource Identifier (URI) scheme that provides a way to include data in-line in web pages as if they were external resources.
	// The The encodeURIComponent() function encodes the special characters of a URI component
	// More infomration about the data URI scheme available here: https://en.wikipedia.org/wiki/Data_URI_scheme
	// More infomration about the encodeURIComponent() function available here: https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
	downloadLink.setAttribute('href', 'data:text/html;charset=UTF-8,' + encodeURIComponent(emailTemplate));

	// Simulate a mouse-click on the link using the click() method
	downloadLink.click();
}
