
// global navi
$("#nav2").addClass("active");

var els = $(".listing :checkbox").attr("checked", false);

// tooltips
$(".listing img").tooltip({ position: 'right top', offset: [60, 10], delay: 50 });


// checkbox change
els.change(function() {

	// count size
	var size = 0,
		 count = 0,
		 tools = "";

	els.filter(":checked").each(function() {

		// 170 bytes for stripping down comment size
		size += parseFloat($(this).val()) - 170;
		count++;
		tools += "&t=" + this.name;
	});

	// user information
	$("#selected").html('(' +count+ ' of ' + els.size() + ' selected)');
	$("#minified").html(Math.round(size / 10) / 100 + ' Kb');
	$("#gzipped") .html(Math.round(size * 0.0322) / 100 + ' Kb <em>gzipped</em>');


	// download link
	$("#downloadLink").attr("href", "http://no.de/jquerytools/1.2.5/jquery.tools.min.js" + tools);
	$("#tokens").html(tools);

	// highlight row
	var tr = $(this).parents("tr"), checked = this.checked;

	if (checked) {
		tr.addClass("selected");
	} else {
		tr.removeClass("selected");
	}

	// show/hide plugins
	if (!tr.is(".plugin")) {
		tr.nextAll().each(function()  {
			if ($(this).is(".plugin"))  {
				if (checked) {
					$(this).fadeIn();
				} else {
					$(this).hide().removeClass("selected").find(":checkbox").attr("checked", false);
				}

			} else  {
				return false;
			}
		});
	}

});

// default selection
$("#t_tabs, #t_tooltip, #t_scrollable, #t_overlay").each(function() {
	$(this).find(":checkbox").click().triggerHandler("change");
});
