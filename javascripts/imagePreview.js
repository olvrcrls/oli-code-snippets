// Uses jQuery.
$(document).ready(function () {
			function readURL(input) {
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					reader.onload = function (e) {
						$("#imageToUpload").attr('src', e.target.result);
					}// reader.onload function
					reader.readAsDataURL(input.files[0]);
				} // if
			} // readURL function
			$('#image_file').on('change', function () {
				readURL(this);
			});			
		});

// alternative using ES6
/**
	window.onload(function () {

		readURL(input) {
			if (input.files && input.files[0]) {
					const reader = new FileReader();
					reader.onload = (e => {
						document.querySelect('#imageToUpload').attr('src', e.target.result);
					}) // reader.onload function
					reader.readAsDataURL(input.files[0]);
				} // if there is an input file
			} // readURL function
			querySelector('#image_file').onchange(() => { readURL(this) });
			}); // window ready

*/
