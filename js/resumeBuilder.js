var bio = {
	"name": "Tom Bloom",
	"role": "Explorer",
	"contacts": {
		"mobile": "123-123-1234",
		"email": "me@emailaddress",
		"github": "githubaddress",
		"twitter": "@twitteraddress",
		"location": "New York"
	},
	"welcomeMessage": "Live A Little!",
	"skills": ["Anthropology", "Archaeology", "Theory", "Philosophy", "Religion"],
	"biopic": "images/main-arch-img.png",
	"display": function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts:last").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts:last").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#topContacts").after(HTMLbioPic.replace("%data%", bio.biopic));
		$(".biopic").after(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			/*made these nice for/in loops as we learned them in Udacitiy lessons!
			but I am replacing them per Udacity Style Guide for Javascript with
			more conventional version!
			for(var item in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
				$("#skills").append(formattedSkill);
			}*/
			var skillsLength = bio.skills.length;
			for (var i=0; i<skillsLength; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Universtiy of Southern Mississippi",
			"location": "Hattiesburg, Mississippi",
			"degree": "BS",
			"majors": ["Anthropology"],
			"dates": "2000-2004",
			"url": "www.usm.edu"
		},
		{	"name": "University of California, Berkeley",
			"location": "Berkeley, California",
			"degree": "Ph.D.",
			"majors": ["Archaeology"],
			"dates": "2005-2010",
			"url": "www.berkeley.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "frontend",
			"school": "udacity",
			"date": "2015",
			"url": "www.udacity.com"
		},
		{
			"title": "fullstack",
			"school": "udacity",
			"date": "2015",
			"url": "www.udacity.com"
		}
	],
	"display": function () {
		/*letting go of this version of for/in loop for the more conventional version per
		Udacity JS Style Guide
		for (var item in education.schools) {*/
		var schoolsLength = education.schools.length;
		for (var i=0; i<schoolsLength; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedEducationItem = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

			$(".education-entry:last").append(formattedEducationItem);
		}

		$("#education").append(HTMLonlineClasses);

		//for (var item in education.onlineCourses) {
		var onLineClassesLength = education.onlineCourses.length;
		for (i=0; i<onLineClassesLength; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedOnLineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnLineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnLineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			var formattedOnLineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			var formattedOnLineCourses = formattedOnLineTitle + formattedOnLineSchool + formattedOnLineDates + formattedOnLineURL;

			$(".education-entry:last").append(formattedOnLineCourses);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "SOILS Enterprise",
			"title": "Archaeologist",
			"location": "Los Angeles, California",
			"dates": "2012-2015",
			"description": "Currently employed as an archaeologist with SOILS Enterprise, a fictional Forest Service unit. Job duties include, but are not limited to, working on multiple cultural resource projects throughout the United States, collecting field data, archaeological research, artifact identification, data analysis, and report writing."
		},
		{
			"employer": "Universtiy of Southern Mississippi",
			"title": "Associate Research Professor of Anthropology",
			"location": "Hattiesburg, Mississippi",
			"dates": "2002-2005",
			"description": "In this “dual” position I taught anthropology courses for USM‘s Department of Social and Behavioral Sciences and I was responsible for the archaeological resources in my station territory–11 counties."
		}
	],
	"display": function () {
		//for (var job in work.jobs) {
		var jobLength = work.jobs.length;
		for (var i=0; i<jobLength; i++) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

			$(".work-entry:last").append(formattedEmployerTitle);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Yosemite Project",
			"dates": "2010-2012",
			"description": "Acted as an archaeological technician assisting in the Yosemite 2010 Site Condition Assessment Project. Surveyed backcountry locations to identify and document historic and prehistoric archaeological sites. Evaluated and identified cultural remains. Ability to work in rough terrain in various weather conditions. Arduously hiked up to ten miles a day with a 50 pound pack in elevations ranging 7,000 feet to 11,000 feet. Camped in backcountry locations four days a week while practicing leave no trace philosophies.",
			"images": ["images/yosemite-dig-1-Cropped.jpg", "images/yosemite-dig-2-Cropped.jpg", "images/yosemite-dig-3-Cropped.jpg"]
		},
		{
			"title": "Carlsbad Project",
			"dates": "2012-2013",
			"description": "Acted as the leading archeological technician in Carlsbad Caverns National Park. Located and documented over one hundred archeological sites, major archeological site features, and significant artifacts with high-accuracy Global Positioning System (GPS) equipment.",
			"images": ["images/carlsbad-dig-1-Cropped.jpg", "images/carlsbad-dig-2-Cropped.jpg", "images/carlsbad-dig-3-Cropped.jpg"]
		}
	],
	"display" : function () {
		var projectsLength = projects.projects.length;
		for (var i=0; i<projectsLength; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var formattedProjectImage = "";

			if (projects.projects[i].images.length > 0) {
				var imageLength = projects.projects[i].images.length;
				for (var j=0; j<imageLength; j++) {
						var formattedNextProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
						formattedProjectImage = formattedProjectImage + formattedNextProjectImage;
				}
			}
			var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
			$(".project-entry:last").append(formattedProject);
		}
	}
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

function inName() {
	var nameArray = bio.name.split(" ");
	var newFirstName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();

	var newLastName = nameArray[1].toUpperCase();

	var internationalName = newFirstName + " " + newLastName;
	return internationalName;
}

$("#main").append(internationalizeButton);