1. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


def quarter_of(month):

    # Quarter One
    if month <= 3:
        return 1

    # Quarter Two
    elif month <=6 and month > 3:
        return 2

    # Quarter Three
    elif month <=9 and month > 6:
        return 3

    # Quarter Four
    else:
        return 4
