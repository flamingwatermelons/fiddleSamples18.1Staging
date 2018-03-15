$(function () {
            $("#alarm").igTimePicker({
                timeInputFormat: "hh:mm tt",
                isLimitedToListValues: false,
                spinDelta: { hours: 1, minutes: 1 },
                buttonType: "spin",
                value: "07:15 AM"
            });

            $("#lunchBreak").igTimePicker({
                timeInputFormat: "HH:mm",
                timeDisplayFormat: "HH:mm",
                minValue: "11:00",
                maxValue: "14:00",
                itemsDelta: { hours: 1, minutes: 0 },
                value: "12:00"
            });

            $("#meetingTime").igTimePicker({
                minValue: "09:00 AM",
                maxValue: "06:00 PM",
                buttonType: "clear",
                value: "02:00 PM"
            });
        });