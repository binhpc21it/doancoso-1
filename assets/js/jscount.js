function animateValue($obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(current);
        if (current == end) {
            $obj.text($obj.text()+'+');
            clearInterval(timer);
        }
    }, stepTime);
}

var $number = $('.count-number'),
    start = $number.attr('data-start')*1,
    end = $number.attr('data-end')*1;

animateValue($number, start, end, 2000);  