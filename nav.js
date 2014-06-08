var json_nav = {
	0: {
		"name": "Home",
		"href": "#"
	},
	1: {
		"name": "About",
		"href": "#"
	},
	4: {
		"name": "Blog",
		"href": "#",
		"sub": {
			0: {
				"name": "General",
				"href": "#"
			},
			1: {
				"name": "Instp",
				"href": "#",
				"sub": {
					0: {
						"name": "Granted",
						"href": "#"
					},
					1: {
						"name": "Endinspection",
						"href": "#",
						"sub": {
							0: {
								"name": "Granted",
								"href": "#",
								"sub": {
									0: {
										"name": "Granted",
										"href": "#",
										"sub": {
											0: {
												"name": "Granted",
												"href": "#"
											},
											1: {
												"name": "Endinspection",
												"href": "#"
											}
										}
									},
									1: {
										"name": "Endinspection",
										"href": "#"
									}
								}
							},
							1: {
								"name": "Endinspection",
								"href": "#"
							}
						}
					}
				}
			},
			2: {
				"name": "Post",
				"href": "#"
			}
		}
	},
	3: {
		"name": "Project",
		"href": "#",
		"sub": {
			0: {
				"name": "General",
				"href": "#"
			},
			1: {
				"name": "Instp",
				"href": "#",
				"sub": {
					0: {
						"name": "Granted",
						"href": "#",
						"sub": {
							0: {
								"name": "Granted",
								"href": "#"
							},
							1: {
								"name": "Endinspection",
								"href": "#"
							}
						}
					},
					1: {
						"name": "Endinspection",
						"href": "#"
					}
				}
			},
			2: {
				"name": "Post",
				"href": "#"
			}
		}
	}
};

/*var genNav = function (obj, n) {
	var num = n || 1;
	var genHtml = "<ul>";
	$.each(obj, function (i) {
		if (obj[i].sub) {
			genHtml += "<li class=nav_sub" + num + "><a href=" + obj[i].href + ">" + obj[i].name + "</a>" + genNav(obj[i].sub, ++num) + "</li>";
		} else {
			genHtml += "<li><a href=" + obj[i].href + ">" + obj[i].name + "</a></li>";
		}
	});
	genHtml += "</ul>"
	return genHtml;
};*/

var genNav = function (obj) {
	var genHtml = "<ul>";
	$.each(obj, function (i) {
		genHtml += "<li><a href=" + obj[i].href + ">" + obj[i].name + "</a>";
		if (obj[i].sub) {
			genHtml += genNav(obj[i].sub);
		}
		genHtml += "</li>"
	});
	genHtml += "</ul>"
	return genHtml;
};

$(document).ready(function () {
	$(".nav").append(genNav(json_nav));
});