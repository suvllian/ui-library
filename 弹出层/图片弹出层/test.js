import { createMask } from './createMask.js';

let html = '<div class="mask-contain">\
				<div class="mask-image" id="mask-image">\
					<img src="./static/img/work-1.jpg">\
				</div>\
				<div class="slide-action">\
					<div class="slide-action-left">\
						<a class="slide-action-butn" id="left" href="javascript:;">\
							<i class="fa fa-angle-left fa-3x"></i>\
						</a>\
					</div>\
					<div class="slide-action-right">\
						<a class="slide-action-butn" id="right" href="javascript:;">\
							<i class="fa fa-angle-right fa-3x"></i>\
						</a>\
					</div>\
				</div>\
			</div>';
createMask(html);