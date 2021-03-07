import moment from "moment";
moment.locale("ru");

function formatedInterval(diff, unit) {
	let thresholds = {
		s: 60,
		m: 60,
		h: 24,
		d: 30,
		M: 12,
	}
	diff = Math.abs(diff);

	if (diff == 1) {
		return '1 ' + moment.duration(diff, unit).humanize(thresholds);
	}

	return moment.duration(diff, unit).humanize(thresholds);
}

function getInterval(timestamp) {
	let diff = moment.duration(moment(timestamp).diff());

	if (diff.years()) {
		return (
			formatedInterval(diff.years(), "years") +
			(diff.months() ? ", " + formatedInterval(diff.months(), "months") : '') +
			(diff.days() ? ", " + formatedInterval(diff.days(), "days") : '')
		);
	}

	if (diff.months()) {
		return (
			formatedInterval(diff.months(), "months") +
			(diff.days() ? ", " + formatedInterval(diff.days(), "days") : '')
		);
	}

	if (diff.days()) {
		return (
			formatedInterval(diff.days(), "days") +
			(diff.hours() ? ", " + formatedInterval(diff.hours(), "hours") : '')
		);
	}

	if (diff.hours()) {
		return (
			formatedInterval(diff.hours(), "hours") +
			(diff.minutes() ? ", " + formatedInterval(diff.minutes(), "minutes") : '')
		);
	}

	if (diff.minutes()) {
		return formatedInterval(diff.minutes(), "minutes");
	}

	if (diff.minutes() == 0) {
		return "Сейчас";
	}

	return "";
}


export { getInterval };